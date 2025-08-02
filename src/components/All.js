import React from 'react';
import facultyData from   './Faculty';
import { Phone, Mail } from 'lucide-react';
import './All.css';


const FacultyCard = ({ faculty }) => {
  const cardClasses = faculty.isHighlighted
    ? "highlighted-card"
    : "regular-card";

  return (
    <div className={`faculty-card ${cardClasses}`}>
      <div className="card-content">
        <div className="card-image">
          <img src={faculty.photoUrl} alt={faculty.name} />
          {faculty.isHighlighted && <div className="highlight-icon">★</div>}
        </div>
        <h3 className="faculty-name">{faculty.name}</h3>
        <div className="faculty-designation">{faculty.designation}</div>
        <div className="faculty-qualification"><strong>Qualification:</strong> {faculty.qualification}</div>
        <div className="faculty-specialization"><strong>Specialization:</strong><br /><i>{faculty.specialization}</i></div>
        <div className="faculty-icons">
          {faculty.email && (
            <button className="icon-button mail">
              <Mail size={16} />
            </button>
          )}
          {faculty.phone && (
            <button className="icon-button phone">
              <Phone size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const All = ({ searchTerm }) => {
  const filteredFaculty = facultyData.filter((faculty) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      faculty.name.toLowerCase().includes(lowerSearch) ||
      faculty.id.toString().includes(lowerSearch)
    );
  });

  return (
    <div className="all-container">
      <div className="faculty-grid">
        {filteredFaculty.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export default All;
