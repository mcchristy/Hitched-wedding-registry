import React from 'react';
import coupleImage from '../../public/images/couple.jpg';

function UserProfile() {

  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    registryTitle: "John and Jane's Wedding Registry",
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <img src={coupleImage} alt="Couple" width="300" height="300" />
      <div className="profile-details">
        <p>
          <strong>First Name:</strong> {userProfile.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {userProfile.lastName}
        </p>
        <p>
          <strong>Email:</strong> {userProfile.email}
        </p>
        <p>
          <strong>Registry Title:</strong> {userProfile.registryTitle}
        </p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;