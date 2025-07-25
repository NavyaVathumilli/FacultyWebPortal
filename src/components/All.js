// All.js
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Search, X } from 'lucide-react';
import './All.css';

const facultyData = [
  {
    id: 1,
    name: "DR. V. CHANDRA PRAKASH",
    designation: "PROFESSOR & HEAD",
    qualification: "Ph.D",
    specialization: "Artificial Intelligence, Machine Learning",
    photoUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "chandraprakash@cse.edu",
    phone: "+91 98765 43210"
  },
  {
    id: 2,
    name: "DR. YALLA PRASANTH",
    designation: "ASSOCIATE PROFESSOR",
    qualification: "Ph.D",
    specialization: "Software Engineering, Data Structures",
    photoUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "prasanth@cse.edu",
    phone: "+91 98765 43211",
    
  },
  {
    id: 3,
    name: "DR. ANITHA SHARMA",
    designation: "PROFESSOR",
    qualification: "Ph.D",
    specialization: "Computer Networks, Cybersecurity",
    photoUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "anitha@cse.edu",
    phone: "+91 98765 43212"
  },
  {
    id: 4,
    name: "DR. RAJESH KUMAR",
    designation: "ASSISTANT PROFESSOR",
    qualification: "Ph.D",
    specialization: "Database Systems, Big Data Analytics",
    photoUrl: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "rajesh@cse.edu",
    phone: "+91 98765 43213"
  },
  {
    id: 5,
    name: "DR. PRIYA MENON",
    designation: "ASSOCIATE PROFESSOR",
    qualification: "Ph.D",
    specialization: "Computer Graphics, Image Processing",
    photoUrl: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "priya@cse.edu",
    phone: "+91 98765 43214"
  },
  {
    id: 6,
    name: "DR. SURESH BABU",
    designation: "PROFESSOR",
    qualification: "Ph.D",
    specialization: "Operating Systems, Distributed Computing",
    photoUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "suresh@cse.edu",
    phone: "+91 98765 43215"
  },
  {
    id: 7,
    name: "DR. KAVITHA REDDY",
    designation: "ASSISTANT PROFESSOR",
    qualification: "Ph.D",
    specialization: "Web Technologies, Mobile App Development",
    photoUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "kavitha@cse.edu",
    phone: "+91 98765 43216"
  },
  {
    id: 8,
    name: "DR. ARUN KUMAR",
    designation: "ASSOCIATE PROFESSOR",
    qualification: "Ph.D",
    specialization: "Cloud Computing, DevOps",
    photoUrl: "https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "arun@cse.edu",
    phone: "+91 98765 43217"
  },
  {
    id: 9,
    name: "DR. DEEPIKA SINGH",
    designation: "ASSISTANT PROFESSOR",
    qualification: "Ph.D",
    specialization: "Algorithms, Computational Complexity",
    photoUrl: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "deepika@cse.edu",
    phone: "+91 98765 43218"
  }
];
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

const All = () => {
  return (
    <div className="all-container">
      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export default All;