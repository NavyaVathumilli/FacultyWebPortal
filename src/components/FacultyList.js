import React, { useState } from "react";
import { X } from "lucide-react";
import { facultyData } from "./FacultyData";
import FacultyCard from "./FacultyCard";   
import "./FacultyList.css";

const FacultyList = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <div className="facultylist-container">
      {/* Grid of cards */}
      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            faculty={faculty}
            onClick={() => setSelectedFaculty(faculty)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedFaculty && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{selectedFaculty.name}</h2>
              <button
                onClick={() => setSelectedFaculty(null)}
                className="close-btn"
              >
                <X className="icon" />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-grid">
                {/* Left side with image */}
                <div className="modal-left">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="modal-img"
                  />
                  <div className="modal-availability">
                    <span>{selectedFaculty.availability}</span>
                  </div>
                </div>

                {/* Right side with info */}
                <div className="modal-right">
                  <p className="designation">{selectedFaculty.designation}</p>
                  <p className="department">{selectedFaculty.department}</p>

                  <div className="modal-section">
                    <h4>Contact Information</h4>
                    <p>Email: {selectedFaculty.email}</p>
                    <p>Phone: {selectedFaculty.phone}</p>
                    <p>Office: {selectedFaculty.office}</p>
                  </div>

                  <div className="modal-section">
                    <h4>Education</h4>
                    <p>{selectedFaculty.education}</p>
                  </div>

                  <div className="modal-section">
                    <h4>Experience</h4>
                    <p>{selectedFaculty.experience}</p>
                  </div>

                  <div className="modal-section">
                    <h4>Specializations</h4>
                    <div className="specializations">
                      {selectedFaculty.specialization.map((spec, index) => (
                        <span key={index} className="spec">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyList;
