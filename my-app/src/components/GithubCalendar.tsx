'use client'; 
// hydration issue comes solve later when form velidate
import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedUsername(username);
    setIsSubmitted(true); 
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-purple-500 mb-6">
        GitHub Contribution Calendar
      </h1>

      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="username" className="block text-lg mb-2">
            GitHub Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="border-2 border-purple-400 p-2 mb-4 rounded w-full md:w-1/2"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      )}

      {submittedUsername && (
        <div className="flex justify-center mb-10">
          <GitHubCalendar
            username={submittedUsername}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      )}
    </div>
  );
};

export default GithubCalendar;
