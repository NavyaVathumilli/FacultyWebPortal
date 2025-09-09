import React, { useState } from 'react';
import { User, Clock, Mail, Phone, MapPin, Edit3, Save, X, GraduationCap, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import './FacultyDashboard.css';
import './Navbar.css';

// Navbar component integrated
const Navbar = () => {
  const { logout, currentUser } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">
          <Link to="/" className="navbar-title">Faculty Web Portal</Link>
        </h2>
      </div>
      <div className="navbar-center">
        <span className="welcome-text">Welcome, {currentUser?.name}</span>
        <Link to="/login" onClick={logout} className="navbar-link">Logout</Link>
      </div>
    </nav>
  );
};

const FacultyDashboard = () => {
  const { currentUser, updateAvailability } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState(currentUser);

  const availabilityOptions = ['Available', 'Busy', 'In Meeting', 'Out of Office'];

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'available';
      case 'Busy': return 'busy';
      case 'In Meeting': return 'in-meeting';
      case 'Out of Office': return 'out-of-office';
      default: return 'out-of-office';
    }
  };

  const getAvailabilityDot = (availability) => {
    switch (availability) {
      case 'Available': return 'dot-available';
      case 'Busy': return 'dot-busy';
      case 'In Meeting': return 'dot-in-meeting';
      case 'Out of Office': return 'dot-out-of-office';
      default: return 'dot-out-of-office';
    }
  };

  const handleAvailabilityChange = (status) => {
    updateAvailability(status);
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile(currentUser);
    setIsEditingProfile(false);
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard-grid">
          {/* Sidebar */}
          <div className="dashboard-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header">
                <img src={currentUser?.image} alt={currentUser?.name} className="profile-img" />
                <div>
                  <h3>{currentUser?.name}</h3>
                  <p>{currentUser?.designation}</p>
                </div>
              </div>

              <nav className="sidebar-nav">
                <ul>
                  <li>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={activeTab === 'profile' ? 'active-tab' : ''}
                    >
                      <User /> Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('availability')}
                      className={activeTab === 'availability' ? 'active-tab' : ''}
                    >
                      <Clock /> Availability Status
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="dashboard-main">
            {activeTab === 'profile' && (
              <div className="main-card">
                <div className="profile-header">
                  <h2>Profile Information</h2>
                  {!isEditingProfile ? (
                    <button onClick={() => setIsEditingProfile(true)}>
                      <Edit3 /> Edit Profile
                    </button>
                  ) : (
                    <div className="edit-buttons">
                      <button onClick={handleSaveProfile}><Save /> Save</button>
                      <button onClick={handleCancelEdit}><X /> Cancel</button>
                    </div>
                  )}
                </div>

                <div className="profile-content">
                  <div className="profile-image-section">
                    <img src={currentUser?.image} alt={currentUser?.name} className="profile-large-img" />
                    <div className={`availability-dot ${getAvailabilityDot(currentUser?.availability)}`}></div>
                    <span className={`availability-label ${getAvailabilityColor(currentUser?.availability)}`}>
                      {currentUser?.availability}
                    </span>
                  </div>

                  <div className="profile-details">
                    <div>
                      <label>Full Name</label>
                      {isEditingProfile ? (
                        <input
                          type="text"
                          value={editedProfile?.name || ''}
                          onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                        />
                      ) : (
                        <p>{currentUser?.name}</p>
                      )}
                    </div>

                    <div>
                      <label>Department</label>
                      <p>{currentUser?.department}</p>
                    </div>

                    <div>
                      <label>Designation</label>
                      <p>{currentUser?.designation}</p>
                    </div>

                    <div>
                      <label>Email</label>
                      <div className="flex">
                        <Mail />
                        {isEditingProfile ? (
                          <input
                            type="email"
                            value={editedProfile?.email || ''}
                            onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                          />
                        ) : (
                          <p>{currentUser?.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label>Phone</label>
                      <div className="flex">
                        <Phone />
                        {isEditingProfile ? (
                          <input
                            type="tel"
                            value={editedProfile?.phone || ''}
                            onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                          />
                        ) : (
                          <p>{currentUser?.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label>Office</label>
                      <div className="flex">
                        <MapPin />
                        {isEditingProfile ? (
                          <input
                            type="text"
                            value={editedProfile?.office || ''}
                            onChange={(e) => setEditedProfile({...editedProfile, office: e.target.value})}
                          />
                        ) : (
                          <p>{currentUser?.office}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'availability' && (
              <div className="main-card">
                <h2>Availability Status</h2>
                <div className="current-status">
                  <div className={`availability-dot ${getAvailabilityDot(currentUser?.availability)}`}></div>
                  <span className={`availability-label ${getAvailabilityColor(currentUser?.availability)}`}>
                    {currentUser?.availability}
                  </span>
                </div>

                <div className="update-status">
                  {availabilityOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAvailabilityChange(option)}
                      className={`status-btn ${currentUser?.availability === option ? 'active-status' : ''}`}
                    >
                      <div className={`availability-dot ${getAvailabilityDot(option)}`}></div>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
