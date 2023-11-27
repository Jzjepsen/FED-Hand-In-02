import React from 'react';
import { Link } from 'react-router-dom';

export function Model() {
  return (
    <div>
      <p>Model page</p>
      <Link to="/listOfJobs">Go to List of Jobs</Link>
    </div>
  );
}
