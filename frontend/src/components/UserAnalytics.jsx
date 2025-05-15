import React from "react";

const UserAnalytics = () => {
  const users = [
    { name: "Riya Sharma", lastActive: "2025-05-13", orders: 12, refills: 4 },
    { name: "Ankit Verma", lastActive: "2025-05-11", orders: 8, refills: 3 },
    { name: "Sneha Gupta", lastActive: "2025-05-14", orders: 15, refills: 6 },
    { name: "Rohan Mehta", lastActive: "2025-05-10", orders: 5, refills: 1 },
    { name: "Aditi Joshi", lastActive: "2025-05-09", orders: 20, refills: 9 },
    { name: "Mohit Tiwari", lastActive: "2025-05-12", orders: 10, refills: 2 },
  ];

  const containerStyle = {
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
    color: 'white', // Set default text color to white
  };

  const styles = {
    container: containerStyle,
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: 'white', // Ensure title is white
      textShadow: '2px 2px 4px #000000', // Add text shadow
    },
    breadcrumb: {
      fontSize: "14px",
      color: "white", // Ensure breadcrumb is white
      marginBottom: "30px",
      textShadow: '1px 1px 2px #000000', // Add text shadow
    },
    sectionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: 'white', // Ensure section title is white
      textShadow: '2px 2px 4px #000000', // Add text shadow
    },
    tableWrapper: {
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Increased shadow for table
    },
    th: {
      padding: "16px",
      textAlign: "left",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Black th color
      color: 'white',
      fontWeight: "bold",
      borderBottom: "1px solid #ddd",
      textShadow: '1px 1px 2px #000000', // Add text shadow
    },
    td: {
      padding: "16px",
      borderBottom: "1px solid #eee",
      color: 'white', // Black color for text
      textShadow: '1px 1px 2px #000000', // Add text shadow
    },
    active: {
      color: "#28a745",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 User Analytics</h1>
      <p style={styles.breadcrumb}>Dashboard &gt; Users &gt; Analytics</p>

      <h2 style={styles.sectionTitle}>👥 User Activity Overview</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>👤 Name</th>
              <th style={styles.th}>📅 Last Active</th>
              <th style={styles.th}>🛍️ Total Orders</th>
              <th style={styles.th}>🔄 Refill Orders</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={styles.td}>{user.name}</td>
                <td style={{ ...styles.td, ...(user.lastActive === "2025-05-14" ? styles.active : {}) }}>
                  {user.lastActive}
                </td>
                <td style={styles.td}>{user.orders}</td>
                <td style={styles.td}>{user.refills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAnalytics;