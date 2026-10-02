import { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Tooltip,
  Popover,
  Divider,
} from '@mui/material'

import {
  Menu,
  Dashboard as DashboardIcon,
  People,
  MedicalServices,
  CalendarMonth,
  ReceiptLong,
  AccountBalanceWallet,
  Assessment,
  LocalHospital,
  Notifications,
  Person,
  Logout,
} from '@mui/icons-material'

import { useNavigate } from 'react-router-dom'


function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
      }}
    >

      {/* Logo Icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '12px',
          backgroundColor: '#E8F8F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocalHospital
          sx={{
            color: '#168AAD',
            fontSize: 25,
          }}
        />
      </Box>


      {/* Logo Text */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: '#183B42',
          letterSpacing: '-0.5px',
        }}
      >
        MediCare
      </Typography>

    </Box>
  )
}


function Navbar() {

  const [open, setOpen] = useState(false)

  // Notification popup state
  const [notificationAnchor, setNotificationAnchor] = useState(null)

  const navigate = useNavigate()


  const menuItems = [
    {
      text: 'Dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      text: 'Patients',
      path: '/patients',
      icon: <People />,
    },
    {
      text: 'Doctors',
      path: '/doctors',
      icon: <MedicalServices />,
    },
    {
      text: 'Appointments',
      path: '/appointments',
      icon: <CalendarMonth />,
    },
    {
      text: 'Prescriptions',
      path: '/prescriptions',
      icon: <ReceiptLong />,
    },
    {
      text: 'Billing',
      path: '/billing',
      icon: <AccountBalanceWallet />,
    },
    {
      text: 'Reports',
      path: '/reports',
      icon: <Assessment />,
    },
  ]


  const handleNavigation = (path) => {
    navigate(path)
    setOpen(false)
  }


  return (
    <>

      {/* ================= TOP NAVBAR ================= */}

      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#F7FCFB',
          color: '#183B42',
          boxShadow: '0 2px 10px rgba(22, 138, 173, 0.10)',
        }}
      >

        <Toolbar
          sx={{
            px: {
              xs: 2,
              md: 3,
            },
          }}
        >

          {/* ================= HAMBURGER ================= */}

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              color: '#168AAD',
              mr: 1.5,
            }}
          >
            <Menu />
          </IconButton>


          {/* ================= LOGO ================= */}

          <Box
            onClick={() => navigate('/dashboard')}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Logo />
          </Box>


          {/* ================= RIGHT SIDE ACTIONS ================= */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
            }}
          >


            {/* ================= NOTIFICATION ================= */}

            <Tooltip title="Notifications">

              <IconButton
                onClick={(event) =>
                  setNotificationAnchor(event.currentTarget)
                }
                sx={{
                  color: '#168AAD',
                }}
              >
                <Notifications />
              </IconButton>

            </Tooltip>


            {/* ================= NOTIFICATION POPUP ================= */}

            <Popover
              open={Boolean(notificationAnchor)}
              anchorEl={notificationAnchor}
              onClose={() => setNotificationAnchor(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >

              <Box
                sx={{
                  width: 330,
                  p: 2,
                }}
              >

                {/* Notification Heading */}

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: '#183B42',
                    mb: 1,
                  }}
                >
                  Notifications
                </Typography>


                <Divider />


                {/* Notification 1 */}

                <Box
                  sx={{
                    py: 1.5,
                  }}
                >

                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: '#183B42',
                    }}
                  >
                    New patient registered
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Priya Sharma was added as a new patient.
                  </Typography>

                </Box>


                <Divider />


                {/* Notification 2 */}

                <Box
                  sx={{
                    py: 1.5,
                  }}
                >

                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: '#183B42',
                    }}
                  >
                    Appointment confirmed
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Rahul Verma's appointment has been confirmed.
                  </Typography>

                </Box>


                <Divider />


                {/* Notification 3 */}

                <Box
                  sx={{
                    py: 1.5,
                  }}
                >

                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: '#183B42',
                    }}
                  >
                    Payment received
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    ₹2,500 payment received successfully.
                  </Typography>

                </Box>

              </Box>

            </Popover>


            {/* ================= PROFILE ================= */}

            <Tooltip title="Profile">

              <IconButton
                sx={{
                  color: '#168AAD',
                }}
              >
                <Person />
              </IconButton>

            </Tooltip>


            {/* ================= LOGOUT ================= */}

            <Tooltip title="Logout">

              <IconButton
                onClick={() => navigate('/login')}
                sx={{
                  color: '#168AAD',
                }}
              >
                <Logout />
              </IconButton>

            </Tooltip>

          </Box>

        </Toolbar>

      </AppBar>


      {/* ================= NAVIGATION DRAWER ================= */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >

        <Box
          sx={{
            width: 280,
            height: '100%',
            backgroundColor: '#F7FCFB',
          }}
        >


          {/* ================= DRAWER LOGO ================= */}

          <Box
            sx={{
              px: 2.5,
              py: 2.5,
              borderBottom: '1px solid #D9EFEB',
            }}
          >
            <Logo />
          </Box>


          {/* ================= MENU ================= */}

          <List
            sx={{
              pt: 1,
            }}
          >

            {menuItems.map((item) => (

              <ListItem
                key={item.text}
                disablePadding
              >

                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    px: 2.5,
                    py: 1.5,

                    '&:hover': {
                      backgroundColor: '#E8F8F5',
                    },
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: '#168AAD',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>


                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '15px',
                      color: '#183B42',
                    }}
                  />

                </ListItemButton>

              </ListItem>

            ))}

          </List>

        </Box>

      </Drawer>

    </>
  )
}


export default Navbar