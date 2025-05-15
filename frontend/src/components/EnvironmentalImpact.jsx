import React from "react";

const EnvironmentalImpact = () => {
  const impactData = [
    { metric: "Plastic Saved", value: "1200 kg", icon: "♻️" },
    { metric: "CO₂ Reduction", value: "3.5 tons", icon: "🌿" },
    { metric: "Trees Saved", value: "78", icon: "🌳" },
    { metric: "Water Saved", value: "9500 L", icon: "💧" },
    { metric: "Refillable Orders", value: "642", icon: "🔁" },
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
      color: 'white',
      textShadow: '2px 2px 4px #000000',
    },
    breadcrumb: {
      fontSize: "14px",
      color: "white",
      marginBottom: "30px",
      textShadow: '1px 1px 2px #000000',
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      transition: "transform 0.2s",
    },
    cardHover: {
      transform: "scale(1.02)",
    },
    icon: {
      fontSize: "36px",
      marginBottom: "10px",
      color: "#333",
      textShadow: '1px 1px 2px #000000',
    },
    metric: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "5px",
      textShadow: '1px 1px 2px #000000',
    },
    value: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#007B8F",
      textShadow: '1px 1px 2px #000000',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 Environmental Impact</h1>
      <p style={styles.breadcrumb}>Dashboard &gt; Impact &gt; Environment</p>

      <div style={styles.grid}>
        {impactData.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.metric}>{item.metric}</div>
            <div style={styles.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalImpact;