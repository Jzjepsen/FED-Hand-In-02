import React from 'react';
import { Link } from 'react-router-dom';

export function Model() {
  return (
    <div>
      <p>Model page</p>
      <Link to="/ListOfJobs">Go to List of Jobs</Link>
      <Link to="/AddExpenseToAJob">Add Expense to a Job</Link>

    </div>
  );
}
