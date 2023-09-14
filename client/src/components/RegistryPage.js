import React from 'react';
import { Link } from 'react-router-dom';

function RegistryPage() {
  // Simulated data for the user's single registry (replace with actual data)
  const singleRegistry = {
    id: 1,
    name: 'Your Wedding Registry',
    // Add other registry details as needed
  };

  return (
    <div className="registry-page">
      <h2>Your Wedding Registry</h2>
      <p>
        Welcome to your wedding registry. Here, you can manage the items you've added
        to your registry and share it with your guests.
      </p>
      <h3>Registry Details</h3>
      <ul>
        <li>
          <strong>Name:</strong> {singleRegistry.name}
        </li>
        {/* Add other registry details as needed */}
      </ul>
      <Link to={`/registry/${singleRegistry.id}`}>View Registry</Link>
    </div>
  );
}

export default RegistryPage;