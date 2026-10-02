import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material'

import Navbar from '../../components/Navbar/Navbar.jsx'
import StatCard from '../../components/StatCard/StatCard.jsx'

import {
  CalendarToday,
  People,
  MedicalServices,
  ReceiptLong,
  PersonAdd,
  Payments,
} from '@mui/icons-material'

function Dashboard() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fbff' }}>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ padding: 4 }}>

        {/* Welcome Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: '#17324d' }}
        >
          Welcome to MediCare 🏥
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1, mb: 4 }}
        >
          Here's what's happening at your clinic today.
        </Typography>

        {/* Statistics Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >

          <StatCard
            title="Appointments today"
            value="18"
            description="+3 from yesterday"
            icon={<CalendarToday />}
          />

          <StatCard
            title="Total patients"
            value="1,284"
            description="24 added this month"
            icon={<People />}
          />

          <StatCard
            title="Doctors on duty"
            value="7"
            description="2 departments active"
            icon={<MedicalServices />}
          />

          <StatCard
            title="Pending invoices"
            value="₹4,820"
            description="5 invoices pending"
            icon={<ReceiptLong />}
          />

        </Box>

        {/* Today's Appointments */}
        <Box sx={{ mt: 5 }}>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: '#17324d', mb: 2 }}
          >
            Today's Appointments
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 3,
              border: '1px solid #d9e6ef',
              boxShadow: 'none',
            }}
          >

            <Table>

              <TableHead>
                <TableRow>

                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Time
                  </TableCell>

                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Patient
                  </TableCell>

                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Doctor
                  </TableCell>

                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Visit Type
                  </TableCell>

                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Status
                  </TableCell>

                </TableRow>
              </TableHead>

              <TableBody>

                <TableRow>

                  <TableCell>09:00 AM</TableCell>
                  <TableCell>Priya Sharma</TableCell>
                  <TableCell>Dr. Mehta</TableCell>
                  <TableCell>Consultation</TableCell>

                  <TableCell>
                    <Chip
                      label="Confirmed"
                      size="small"
                      sx={{
                        backgroundColor: '#e8f5e9',
                        color: '#2e7d32',
                      }}
                    />
                  </TableCell>

                </TableRow>

                <TableRow>

                  <TableCell>10:30 AM</TableCell>
                  <TableCell>Rahul Verma</TableCell>
                  <TableCell>Dr. Singh</TableCell>
                  <TableCell>Follow-up</TableCell>

                  <TableCell>
                    <Chip
                      label="Pending"
                      size="small"
                      sx={{
                        backgroundColor: '#fff8e1',
                        color: '#f57f17',
                      }}
                    />
                  </TableCell>

                </TableRow>

                <TableRow>

                  <TableCell>12:00 PM</TableCell>
                  <TableCell>Ananya Gupta</TableCell>
                  <TableCell>Dr. Kapoor</TableCell>
                  <TableCell>Check-up</TableCell>

                  <TableCell>
                    <Chip
                      label="Completed"
                      size="small"
                      sx={{
                        backgroundColor: '#e3f2fd',
                        color: '#1565c0',
                      }}
                    />
                  </TableCell>

                </TableRow>

              </TableBody>

            </Table>

          </TableContainer>

        </Box>

        {/* Clinic Activity */}
        <Box sx={{ mt: 5 }}>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: '#17324d', mb: 2 }}
          >
            Clinic Activity
          </Typography>

          <Paper
            sx={{
              borderRadius: 3,
              border: '1px solid #d9e6ef',
              boxShadow: 'none',
              overflow: 'hidden',
            }}
          >

            {/* Patient Checked In */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2.5,
                borderBottom: '1px solid #eeeeee',
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <PersonAdd />
              </Box>

              <Box>
                <Typography fontWeight="bold">
                  Patient checked in
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Priya Sharma checked in for her appointment
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ ml: 'auto' }}
              >
                10 min ago
              </Typography>

            </Box>

            {/* Payment Received */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2.5,
                borderBottom: '1px solid #eeeeee',
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Payments />
              </Box>

              <Box>
                <Typography fontWeight="bold">
                  Payment received
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ₹2,500 payment received from Rahul Verma
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ ml: 'auto' }}
              >
                35 min ago
              </Typography>

            </Box>

            {/* Prescription Issued */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2.5,
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: '#fff8e1',
                  color: '#f57f17',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ReceiptLong />
              </Box>

              <Box>
                <Typography fontWeight="bold">
                  Prescription issued
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Dr. Mehta issued a prescription for Ananya Gupta
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ ml: 'auto' }}
              >
                1 hour ago
              </Typography>

            </Box>

          </Paper>

        </Box>

      </Box>

    </Box>
  )
}

export default Dashboard