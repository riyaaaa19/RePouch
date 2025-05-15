import React, { useState } from 'react';

const ReturnsTracking = () => {
  // Sample data for returns tracking
  const [returns] = useState([
    { user: 'Riya', returnedPouches: 5, status: 'Processed' },
    { user: 'Arnav', returnedPouches: 3, status: 'Pending' },
    { user: 'Priya', returnedPouches: 7, status: 'Processed' },
    { user: 'Himanshu', returnedPouches: 2, status: 'Pending' },
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

  const statusStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  };

  const processedStyle = {
    backgroundColor: '#388e3c',
    color: 'white',
  };

  const pendingStyle = {
    backgroundColor: '#FF5722',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Returns Tracking</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>User</th>
            <th style={thTdStyle}>Returned Pouches</th>
            <th style={thTdStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {returns.map((returnItem, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={thTdStyle}>{returnItem.user}</td>
              <td style={thTdStyle}>{returnItem.returnedPouches}</td>
              <td style={thTdStyle}>
                <span
                  style={{
                    ...statusStyle,
                    ...(returnItem.status === 'Processed' ? processedStyle : pendingStyle),
                  }}
                >
                  {returnItem.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnsTracking;