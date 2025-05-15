import React, { useState } from 'react';

const RewardsPoints = () => {
  // Sample data for users and their points
  const [users] = useState([
    { name: 'Riya', points: 150 },
    { name: 'Arnav', points: 200 },
    { name: 'Priya', points: 120 },
    { name: 'Himanshu', points: 180 },
  ]);

  // Inline CSS for the component
  const containerStyle = {
    padding: '30px',
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    maxWidth: '80%',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  };

  const headerStyle = {
    fontSize: '26px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
    textShadow: '2px 2px 4px #000000',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const thTdStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    border: '1px solid #ddd',
    fontSize: '16px',
    color: 'white',
    textShadow: '1px 1px 2px #000000',
  };

  const thStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    fontWeight: 'bold',
  };

  const evenRowStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    backgroundColor: '#388e3c',
  };

  const buttonDisabledStyle = {
    backgroundColor: '#bdbdbd',
    cursor: 'not-allowed',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Rewards & Points</h2>
      
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>User</th>
            <th style={thTdStyle}>Points Earned</th>
            <th style={thTdStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={thTdStyle}>{user.name}</td>
              <td style={thTdStyle}>{user.points}</td>
              <td style={thTdStyle}>
                <button
                  style={user.points >= 100 ? buttonStyle : { ...buttonDisabledStyle }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = user.points >= 100 ? buttonStyle.backgroundColor : buttonDisabledStyle.backgroundColor}
                  disabled={user.points < 100} // Disable button if points are less than 100
                >
                  {user.points >= 100 ? 'Redeem' : 'Not Enough Points'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsPoints;