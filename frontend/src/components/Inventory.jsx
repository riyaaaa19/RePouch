import React, { useState } from 'react';

const InventoryTracking = () => {
  // Sample data for inventory tracking
  const [inventory] = useState([
    { product: 'Shampoo Refill', stock: 150, threshold: 50, status: 'In Stock' },
    { product: 'Oil Refill', stock: 30, threshold: 20, status: 'Low Stock' },
    { product: 'PLA Containers', stock: 200, threshold: 100, status: 'In Stock' },
    { product: 'Toothpaste Refill', stock: 10, threshold: 20, status: 'Out of Stock' },
  ]);

  // Inline CSS for the component
  const containerStyle = {
    padding: '30px',
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    maxWidth: '90%', // Increased max width
    margin: '20px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', // Modern font
    color: 'white',
  };

  const headerStyle = {
    fontSize: '32px', // Larger header
    color: 'white', // Darker green
    textAlign: 'center',
    marginBottom: '30px', // Increased margin
    fontWeight: '600', // Semi-bold
    textShadow: '2px 2px 4px #000000',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate', // Use 'separate' for rounded corners on cells
    borderSpacing: '0 8px', // Add spacing between rows
  };

  const thTdStyle = {
    padding: '15px', // Increased padding
    textAlign: 'left',
    border: 'none', // Remove cell borders
    fontSize: '18px', // Increased font size
    fontWeight: '500', // Medium font weight
    color: 'white',
    textShadow: '1px 1px 3px black',
  };

  const thStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker green
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase for headers
    letterSpacing: '1px', // Add letter spacing
    textShadow: '1px 1px 3px black',
  };

  const evenRowStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Lighter green for even rows
    borderRadius: '12px', // Rounded corners for rows
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Subtle shadow
  };

  const statusStyle = {
    padding: '8px 15px', // Increased padding
    borderRadius: '20px', // More rounded corners
    fontWeight: '600', // Semi-bold
    fontSize: '16px', // Increased font size
    textShadow: '1px 1px 3px black',
  };

  const inStockStyle = {
    backgroundColor: '#43a047', // Darker green
    color: 'white',
    textShadow: '1px 1px 3px black',
  };

  const lowStockStyle = {
    backgroundColor: '#fdd835', // Yellow
    color: '#212121', // Dark text for contrast
    textShadow: '1px 1px 3px black',
  };

  const outOfStockStyle = {
    backgroundColor: '#e53935', // Red
    color: 'white',
    textShadow: '1px 1px 3px black',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Inventory Tracking</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Product</th>
            <th style={thTdStyle}>Stock Available</th>
            <th style={thTdStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={thTdStyle}>{item.product}</td>
              <td style={thTdStyle}>{item.stock}</td>
              <td style={thTdStyle}>
                <span
                  style={{
                    ...statusStyle,
                    ...(item.status === 'In Stock' ? inStockStyle : item.status === 'Low Stock' ? lowStockStyle : outOfStockStyle),
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTracking;