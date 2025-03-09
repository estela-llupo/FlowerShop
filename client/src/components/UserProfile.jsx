import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const UserProfile = () => {
  
  return (
    <div>
      <nav className="navLinks">
      <Navigation />
      </nav>
      <div>
        <h1>My Profile</h1>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default UserProfile;