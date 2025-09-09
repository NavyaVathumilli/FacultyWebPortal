import React from "react";
import "./FacultyCard.css";

const FacultyCard = ({ faculty, onClick }) => {
  return (
    <div className="faculty-card" onClick={onClick}>
      <img src={faculty.image} alt={faculty.name} className="faculty-image" />
      <div className="faculty-info">
        <h3 className="faculty-name">{faculty.name}</h3>
        <p className="faculty-designation">{faculty.designation}</p>
        <p className="faculty-department">{faculty.department}</p>
        <p className="faculty-availability">
          Status:{" "}
          <span
            className={faculty.availability.toLowerCase().replace(/\s/g, "-")}
          >
            {faculty.availability}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FacultyCard;
