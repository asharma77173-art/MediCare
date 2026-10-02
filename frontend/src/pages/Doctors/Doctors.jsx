import { useState } from 'react'

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material'

import {
  Search,
  Add,
} from '@mui/icons-material'

import Navbar from '../../components/Navbar/Navbar.jsx'


function Doctors() {

  const [search, setSearch] = useState('')

  const doctors = [
    {
      name: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      schedule: '9:00 AM – 4:00 PM',
      status: 'Available',
    },
    {
      name: 'Dr. James Lee',
      specialty: 'Neurology',
      schedule: '10:00 AM – 6:00 PM',
      status: 'In consultation',
    },
    {
      name: 'Dr. Emily Carter',
      specialty: 'Pediatrics',
      schedule: '8:30 AM – 3:00 PM',
      status: 'Available',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      schedule: '11:00 AM – 7:00 PM',
      status: 'Away',
    },
  ]


  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )


  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F5FAFC',
      }}
    >

      {/* Navbar */}
      <Navbar />


      {/* Main Content */}
      <Box
        sx={{
          px: {
            xs: 2,
            md: 3,
          },
          py: 2,
        }}
      >

        {/* Page Label */}
        <Typography
          variant="body2"
          sx={{
            color: '#0096C7',
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          MediCare Clinic
        </Typography>


        {/* Page Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            justifyContent: 'space-between',
            gap: 2,
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >

          <Box>

            <Typography
              variant="h3"
              fontWeight="500"
              sx={{
                color: '#102A43',
                lineHeight: 1.1,
              }}
            >
              Doctors
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#5C7080',
                mt: 1,
              }}
            >
              Manage and review your clinic's doctors.
            </Typography>

          </Box>


          {/* Add Doctor Button */}
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              backgroundColor: '#0096C7',
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '10px',
              px: 2.5,
              py: 1.2,
              boxShadow: 'none',

              '&:hover': {
                backgroundColor: '#007EA7',
                boxShadow: 'none',
              },
            }}
          >
            Add Doctor
          </Button>

        </Box>


        {/* Doctors Card */}
        <Paper
          sx={{
            mt: 4,
            borderRadius: '16px',
            border: '1px solid #D5E4EA',
            boxShadow: 'none',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
          }}
        >

          {/* Card Header */}
          <Box
            sx={{
              px: 2.5,
              py: 2.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >

            <Box>

              <Typography
                variant="h6"
                fontWeight="600"
                sx={{
                  color: '#102A43',
                }}
              >
                All doctors
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#6B7C8C',
                  mt: 0.3,
                }}
              >
                {filteredDoctors.length} records in this view
              </Typography>

            </Box>


            {/* Search */}
            <TextField
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search doctors..."
              size="small"
              sx={{
                width: {
                  xs: '100%',
                  sm: 290,
                },

                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',

                  '& fieldset': {
                    borderColor: '#C9DDE6',
                  },

                  '&:hover fieldset': {
                    borderColor: '#0096C7',
                  },

                  '&.Mui-focused fieldset': {
                    borderColor: '#0096C7',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        color: '#607D8B',
                        fontSize: 21,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

          </Box>


          {/* Doctors Table */}
          <TableContainer>

            <Table>

              {/* Table Header */}
              <TableHead>

                <TableRow
                  sx={{
                    backgroundColor: '#F1F8FB',
                  }}
                >

                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#526777',
                      borderBottom: '1px solid #D5E4EA',
                      py: 1.5,
                    }}
                  >
                    DOCTOR
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#526777',
                      borderBottom: '1px solid #D5E4EA',
                      py: 1.5,
                    }}
                  >
                    SPECIALTY
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#526777',
                      borderBottom: '1px solid #D5E4EA',
                      py: 1.5,
                    }}
                  >
                    SCHEDULE
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#526777',
                      borderBottom: '1px solid #D5E4EA',
                      py: 1.5,
                    }}
                  >
                    STATUS
                  </TableCell>

                </TableRow>

              </TableHead>


              {/* Table Body */}
              <TableBody>

                {filteredDoctors.map((doctor) => (

                  <TableRow
                    key={doctor.name}
                    sx={{
                      '&:last-child td': {
                        borderBottom: 0,
                      },

                      '&:hover': {
                        backgroundColor: '#FAFCFD',
                      },
                    }}
                  >

                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: '#102A43',
                        py: 2,
                      }}
                    >
                      {doctor.name}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {doctor.specialty}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {doctor.schedule}
                    </TableCell>


                    <TableCell
                      sx={{
                        py: 2,
                      }}
                    >

                      <Chip
                        label={doctor.status}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          borderRadius: '20px',
                          px: 0.5,

                          backgroundColor:
                            doctor.status === 'Available'
                              ? '#DDF7E8'
                              : '#FFE5EF',

                          color:
                            doctor.status === 'Available'
                              ? '#087443'
                              : '#D14D72',
                        }}
                      />

                    </TableCell>

                  </TableRow>

                ))}


                {/* No Results */}
                {filteredDoctors.length === 0 && (

                  <TableRow>

                    <TableCell
                      colSpan={4}
                      align="center"
                      sx={{
                        py: 5,
                        color: '#6B7C8C',
                      }}
                    >
                      No doctors found.
                    </TableCell>

                  </TableRow>

                )}

              </TableBody>

            </Table>

          </TableContainer>

        </Paper>

      </Box>

    </Box>
  )
}


export default Doctors