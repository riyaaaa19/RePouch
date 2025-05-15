import React from "react";

const RefillOrders = () => {
  const orders = [
    {
      id: "#1024",
      user: "Riya Sharma",
      product: "Shampoo",
      status: "Pending",
      date: "2025-05-10",
    },
    {
      id: "#1025",
      user: "Ankit Verma",
      product: "Toothpaste",
      status: "Pending",
      date: "2025-05-11",
    },
    {
      id: "#1026",
      user: "Sneha Gupta",
      product: "Face Wash",
      status: "Pending",
      date: "2025-05-09",
    },
    {
      id: "#1027",
      user: "Rohan Mehta",
      product: "Hair Oil",
      status: "Pending",
      date: "2025-05-12",
    },
    {
      id: "#1028",
      user: "Aditi Joshi",
      product: "Body Lotion",
      status: "Pending",
      date: "2025-05-08",
    },
    {
      id: "#1029",
      user: "Mohit Tiwari",
      product: "Soap",
      status: "Pending",
      date: "2025-05-13",
    },
  ];

  const containerStyle = {
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
    color: 'white',
  };

  const styles = {
    container: containerStyle,
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: 'white',
      textShadow: '2px 2px 4px #000000',
    },
    breadcrumb: {
      fontSize: "14px",
      color: "white",
      marginBottom: "30px",
      textShadow: '1px 1px 2px #000000',
    },
    sectionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: 'white',
      textShadow: '2px 2px 4px #000000',
    },
    tableWrapper: {
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },
    th: {
      padding: "16px",
      textAlign: "left",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: 'white',
      fontWeight: "bold",
      borderBottom: "1px solid #ddd",
      textShadow: '1px 1px 2px #000000',
    },
    td: {
      padding: "16px",
      textAlign: "left",
      borderBottom: "1px solid #eee",
      color: 'white',
      textShadow: '1px 1px 2px #000000',
    },
    statusPending: {
      color: "#FF5722",
      fontWeight: "bold",
      textShadow: '1px 1px 2px #000000',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔄 Refill Orders</h1>
      <p style={styles.breadcrumb}>Dashboard &gt; Orders &gt; Refill Orders</p>

      <h2 style={styles.sectionTitle}>🕓 Pending Refill Orders</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>🆔 Order ID</th>
              <th style={styles.th}>👤 User</th>
              <th style={styles.th}>🧴 Product</th>
              <th style={styles.th}>⏳ Status</th>
              <th style={styles.th}>📅 Requested Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.user}</td>
                <td style={styles.td}>{order.product}</td>
                <td style={{ ...styles.td, ...styles.statusPending }}>{order.status}</td>
                <td style={styles.td}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefillOrders;