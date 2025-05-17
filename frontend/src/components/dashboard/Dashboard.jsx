import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, List, ListItem, ListItemText, Button, IconButton, InputBase, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import RedeemIcon from '@mui/icons-material/Redeem';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import RestoreIcon from '@mui/icons-material/Restore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import the right arrow icon
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import Logout Icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import Account Icon
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import RefillOrders from '../RefillOrders';
import UserAnalytics from '../UserAnalytics';
import EnvironmentalImpact from '../EnvironmentalImpact';
import RewardsPoints from '../RewardsPoints';
import ReturnsTracking from '../ReturnsTracking';
import InventoryComponent from '../Inventory';

// New Account Component
function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear local storage, etc.)
    console.log('Logging out...');
    // After logging out, navigate to the login page or home page
    navigate('/'); // Replace '/' with your login route if needed
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh', padding: '32px' }}>
      <Paper style={{
        width: '80%', // Wider for desktop
        maxWidth: '800px', // Maximum width
        padding: '32px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
      }}>
        <AccountCircleIcon style={{ fontSize: 80, color: 'white', marginBottom: '16px' }} />
        <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
          User Account
        </Typography>
        <Typography variant="body1" style={{ color: 'white', marginBottom: '24px' }}>
          Manage your account details and preferences here.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ExitToAppIcon />}
          onClick={handleLogout}
          style={{ backgroundColor: '#f44336', color: 'white', '&:hover': { backgroundColor: '#d32f2f' } }}
        >
          Logout
        </Button>
      </Paper>
    </Grid>
  );
}

// New Settings Component
function Settings() {
  const settingsList = [
    { text: 'Account', icon: <PersonIcon /> },
    { text: 'Notifications', icon: <NotificationsNoneIcon /> }, // Corrected icon
    { text: 'Appearance', icon: <VisibilityIcon /> }, // Corrected icon
    { text: 'Privacy & Security', icon: <LockIcon /> }, // Corrected icon
    { text: 'Help and Support', icon: <HeadsetMicIcon /> }, // Corrected icon
    { text: 'About', icon: <InfoIcon /> }, // Corrected icon
  ];

  const settingsItemStyle = {
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      cursor: 'pointer',
    },
  };

  return (
    <Grid container justifyContent="center" alignItems="flex-start" style={{ minHeight: '80vh', padding: '32px' }}>
      <Paper style={{
        width: '80%', // Wider for desktop
        maxWidth: '800px', // Maximum width
        padding: '32px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <IconButton component={Link} to="/" style={{ color: 'white', marginLeft: '-12px', marginBottom: '16px' }}>
              <ArrowBackIcon /> {/* Back Arrow */}
            </IconButton>
            <Typography variant="h5" gutterBottom style={{ color: 'white', textAlign: 'left' }}>
              Settings
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper component="form" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '4px 16px', marginBottom: '16px' }}>
              <IconButton type="submit" aria-label="search" style={{ padding: '8px', color: 'white' }}>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search for a setting..."
                style={{ ml: 1, flex: 1, color: 'white' }}
                inputProps={{ 'aria-label': 'search for a setting' }}
              />
            </Paper>
          </Grid>
        </Grid>

        <List>
          {settingsList.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem style={settingsItemStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {React.cloneElement(item.icon, { style: { marginRight: '16px', color: 'white' } })} {/* Clone and style the icon */}
                  <Typography variant="body1" style={{ color: 'white' }}>
                    {item.text}
                  </Typography>
                </div>
                <ArrowForwardIosIcon style={{ color: 'white', fontSize: '1rem' }} /> {/* Right arrow */}
              </ListItem>
              {index !== settingsList.length - 1 && <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Grid>
  );
}

function DashboardContent() {
  const metricCardStyle = {
    padding: '16px',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: '8px',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const data = [
    { name: 'Jan', refills: 400 },
    { name: 'Feb', refills: 300 },
    { name: 'Mar', refills: 600 },
    { name: 'Apr', refills: 800 },
    { name: 'May', refills: 700 },
  ];

  const popularProducts = [
    { name: 'Shampoo', refills: 234 },
    { name: 'Body Wash', refills: 189 },
    { name: 'Hand Wash', refills: 156 },
  ];

  return (
    <Grid container spacing={3} style={{ padding: '16px' }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={metricCardStyle}>
          <Typography variant="h6" style={{ color: 'white' }}><PersonIcon /> Total Active Users</Typography>
          <Typography variant="h4" style={{ color: 'white' }}>1,234</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={metricCardStyle}>
          <Typography variant="h6" style={{ color: 'white' }}><RestoreIcon /> Plastic Saved (kg)</Typography>
          <Typography variant="h4" style={{ color: 'white' }}>312</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={metricCardStyle}>
          <Typography variant="h6" style={{ color: 'white' }}><LocalShippingIcon /> Refill Rate (%)</Typography>
          <Typography variant="h4" style={{ color: 'white' }}>85%</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={metricCardStyle}>
          <Typography variant="h6" style={{ color: 'white' }}><InsertChartIcon /> Live Refill Requests</Typography>
          <Typography variant="h4" style={{ color: 'white' }}>23</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper style={{ padding: '16px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
            Refill Trends
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
              <XAxis dataKey="name" style={{ fontSize: '14px', color: 'white' }}>
                <Label value="Month" offset={-6} position="bottom" style={{ fontSize: '16px', fill: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2px', borderRadius: '2px', }} />
              </XAxis>
              <YAxis style={{ fontSize: '14px', color: 'white' }}>
                <Label value="Refills Count" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: 'white' }} />
              </YAxis>
              <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', borderRadius: '5px' }} itemStyle={{ color: 'white' }} labelStyle={{ color: 'white' }} />
              <Line type="monotone" dataKey="refills" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '16px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
            Most Refilled Products This Month
          </Typography>
          <List>
            {popularProducts.map((product) => (
              <ListItem key={product.name}>
                <ListItemText primary={<><span style={{ color: 'white' }}>{product.name}</span><div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}><div style={{ width: `${(product.refills / Math.max(...popularProducts.map((p) => p.refills))) * 100}%`, backgroundColor: '#4CAF50', padding: '3px 0', textAlign: 'center', color: 'white', borderRadius: '5px', }}>{product.refills}</div></div></>} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

function Dashboard() {
  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    borderRadius: '20px',
    margin: '0 8px',
    padding: '6px 12px',
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/background.png')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Make sure the background covers the full viewport height
  };

  return (
    <Router>
      <div style={backgroundImageStyle}>
        <Grid container alignItems="center" style={{ padding: '8px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu" component={Link} to="/account"> {/* Wrap logo with Link */}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src="/logo.png" alt="RePouch Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </IconButton>
          </Grid>

          <Grid item>
            <Button style={buttonStyle} component={Link} to="/" startIcon={<DashboardIcon />}>
              Dashboard
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/refill-orders" startIcon={<ShoppingCartIcon />}>
              Refill Orders
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/user-analytics" startIcon={<PeopleIcon />}>
              User Analytics
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/environmental-impact" startIcon={<AssessmentIcon />}>
              Environmental Impact
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/rewards-points" startIcon={<RedeemIcon />}>
              Rewards & Points
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/returns-tracking" startIcon={<TrackChangesIcon />}>
              Returns Tracking
            </Button>
          </Grid>
          <Grid item>
            <Button style={buttonStyle} component={Link} to="/inventory" startIcon={<InventoryIcon />}>
              Inventory
            </Button>
          </Grid>

          <Grid item xs style={{ textAlign: 'right' }}>
            <IconButton color="inherit" aria-label="settings" component={Link} to="/settings">
              <SettingsIcon style={{ color: 'white' }} />
            </IconButton>
          </Grid>
        </Grid>

        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/refill-orders" element={<RefillOrders />} />
          <Route path="/user-analytics" element={<UserAnalytics />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/rewards-points" element={<RewardsPoints />} />
          <Route path="/returns-tracking" element={<ReturnsTracking />} />
          <Route path="/inventory" element={<InventoryComponent />} />
          <Route path="/settings" element={<Settings />} /> {/* Add the new route for Settings */}
          <Route path="/account" element={<Account />} /> {/* Add the new route for Account */}
        </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;