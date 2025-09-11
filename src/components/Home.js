import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, LogIn, ArrowRight } from 'lucide-react';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="text-center">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Faculty Portal</span>
            </h1>
            <p className="hero-subtitle">
              Your comprehensive gateway to connect with faculty members, explore departments, 
              and access real-time availability information. Streamline your academic interactions 
              with our intuitive portal.
            </p>

            {/* Quick Actions */}
            <div className="quick-actions">
              <Link to="/faculty" className="card card-blue">
                <div className="card-content">
                  <div className="icon-wrapper white">
                    <Users className="icon" />
                  </div>
                  <h3 className="card-title">Faculty List</h3>
                  <p className="card-text">
                    Browse through all faculty members and their detailed profiles
                  </p>
                  <div className="card-link blue-text">
                    <span>Explore Faculty</span>
                    <ArrowRight className="arrow" />
                  </div>
                </div>
              </Link>

              <Link to="/dept" className="card card-indigo">
                <div className="card-content">
                  <div className="icon-wrapper white">
                    <Building2 className="icon" />
                  </div>
                  <h3 className="card-title">Departments</h3>
                  <p className="card-text">
                    Explore faculty members organized by their respective departments
                  </p>
                  <div className="card-link indigo-text">
                    <span>View Departments</span>
                    <ArrowRight className="arrow" />
                  </div>
                </div>
              </Link>

              <Link to="/login" className="card card-emerald">
                <div className="card-content">
                  <div className="icon-wrapper white">
                    <LogIn className="icon" />
                  </div>
                  <h3 className="card-title">Faculty Login</h3>
                  <p className="card-text">
                    Access your dashboard to manage profile and availability status
                  </p>
                  <div className="card-link emerald-text">
                    <span>Login</span>
                    <ArrowRight className="arrow" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="features-content">
          <div className="text-center mb-16">
            <h2 className="features-title">Portal Features</h2>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon blue-bg">
                <Users className="feature-icon-inner blue-text" />
              </div>
              <h3 className="feature-title">Faculty Profiles</h3>
              <p className="feature-text">Detailed profiles with contact information and specializations</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon green-bg">
                <div className="dot"></div>
              </div>
              <h3 className="feature-title">Real-time Availability</h3>
              <p className="feature-text">Check faculty availability status before visiting their office</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon indigo-bg">
                <Building2 className="feature-icon-inner indigo-text" />
              </div>
              <h3 className="feature-title">Department Organization</h3>
              <p className="feature-text">Browse faculty members organized by departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
