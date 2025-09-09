import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext(undefined);

// Custom hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'faculty' | null
  const [currentUser, setCurrentUser] = useState(null);

  // Mock faculty data for demo
  const mockFaculty = {
    email: 'john.doe@university.edu',
    password: 'password123',
    name: 'Dr. John Doe',
    department: 'Computer Science',
    designation: 'Professor',
    availability: 'Available',
    phone: '+1 (555) 123-4567',
    office: 'CS Building, Room 301',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  // Login function
  const login = (email, password) => {
    if (email === mockFaculty.email && password === mockFaculty.password) {
      setIsAuthenticated(true);
      setUserType('faculty');
      setCurrentUser(mockFaculty);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentUser(null);
  };

  // Update availability
  const updateAvailability = (status) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, availability: status });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userType,
        currentUser,
        login,
        logout,
        updateAvailability
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
