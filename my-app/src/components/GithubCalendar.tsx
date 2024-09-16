import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = ({ username }) => {
  return (
    <div className="text-center">
      <h1>GithubCalendar</h1>
      <div className="flex justify-center mb-10">
        <GitHubCalendar
          username={username} 
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
