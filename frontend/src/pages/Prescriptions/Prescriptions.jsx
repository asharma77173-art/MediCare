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


function Prescriptions() {

  const [search, setSearch] = useState('')

  const prescriptions = [
    {
      patient: 'Olivia Martin',
      medication: 'Amoxicillin 500mg',
      prescribedBy: 'Dr. Emily Carter',
      date: 'Sep 29, 2026',
      status: 'Active',
    },
    {
      patient: 'Ethan Williams',
      medication: 'Atorvastatin 20mg',
      prescribedBy: 'Dr. Sarah Wilson',
      date: 'Sep 28, 2026',
      status: 'Active',
    },
    {
      patient: 'Sophia Brown',
      medication: 'Sumatriptan 50mg',
      prescribedBy: 'Dr. James Lee',
      date: 'Sep 26, 2026',
      status: 'Completed',
    },
  ]


  const filteredPrescriptions = prescriptions.filter(
    (prescription) =>
      prescription.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      prescription.medication
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      prescription.prescribedBy
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
              Prescriptions
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#5C7080',
                mt: 1,
              }}
            >
              Manage and review your clinic's prescriptions.
            </Typography>

          </Box>


          {/* Add Prescription Button */}
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
            Add Prescription
          </Button>

        </Box>


        {/* Prescriptions Card */}
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
                All prescriptions
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#6B7C8C',
                  mt: 0.3,
                }}
              >
                {filteredPrescriptions.length} records in this view
              </Typography>

            </Box>


            {/* Search */}
            <TextField
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search prescriptions..."
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


          {/* Prescriptions Table */}
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
                    PATIENT
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
                    MEDICATION
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
                    PRESCRIBED BY
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
                    DATE
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

                {filteredPrescriptions.map((prescription) => (

                  <TableRow
                    key={`${prescription.patient}-${prescription.date}`}
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
                      {prescription.patient}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {prescription.medication}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {prescription.prescribedBy}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {prescription.date}
                    </TableCell>


                    <TableCell
                      sx={{
                        py: 2,
                      }}
                    >

                      <Chip
                        label={prescription.status}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          borderRadius: '20px',
                          px: 0.5,

                          backgroundColor:
                            prescription.status === 'Active'
                              ? '#DDF7E8'
                              : '#D9F2FF',

                          color:
                            prescription.status === 'Active'
                              ? '#087443'
                              : '#0084C7',
                        }}
                      />

                    </TableCell>

                  </TableRow>

                ))}


                {/* No Results */}
                {filteredPrescriptions.length === 0 && (

                  <TableRow>

                    <TableCell
                      colSpan={5}
                      align="center"
                      sx={{
                        py: 5,
                        color: '#6B7C8C',
                      }}
                    >
                      No prescriptions found.
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


export default Prescriptions