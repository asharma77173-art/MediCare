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


function Patients() {

  const [search, setSearch] = useState('')

  const patients = [
    {
      name: 'Olivia Martin',
      id: 'PT-1048',
      age: '29 yrs',
      bloodGroup: 'O+',
      status: 'Active',
    },
    {
      name: 'Ethan Williams',
      id: 'PT-1047',
      age: '42 yrs',
      bloodGroup: 'A+',
      status: 'Active',
    },
    {
      name: 'Sophia Brown',
      id: 'PT-1046',
      age: '35 yrs',
      bloodGroup: 'B−',
      status: 'Follow-up',
    },
    {
      name: 'Noah Davis',
      id: 'PT-1045',
      age: '51 yrs',
      bloodGroup: 'AB+',
      status: 'Active',
    },
  ]


  const filteredPatients = patients.filter((patient) =>
    patient.name
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
              Patients
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#5C7080',
                mt: 1,
              }}
            >
              Manage and review your clinic's patients.
            </Typography>

          </Box>


          {/* Add Patient Button */}
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
            Add Patient
          </Button>

        </Box>


        {/* Patients Card */}
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
                All patients
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#6B7C8C',
                  mt: 0.3,
                }}
              >
                {filteredPatients.length} records in this view
              </Typography>

            </Box>


            {/* Search */}
            <TextField
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search patients..."
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


          {/* Patients Table */}
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
                    PATIENT ID
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
                    AGE
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
                    BLOOD GROUP
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

                {filteredPatients.map((patient) => (

                  <TableRow
                    key={patient.id}
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
                      {patient.name}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {patient.id}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {patient.age}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {patient.bloodGroup}
                    </TableCell>


                    <TableCell
                      sx={{
                        py: 2,
                      }}
                    >

                      <Chip
                        label={patient.status}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          borderRadius: '20px',

                          backgroundColor:
                            patient.status === 'Active'
                              ? '#DDF7E8'
                              : '#D9F2FF',

                          color:
                            patient.status === 'Active'
                              ? '#087443'
                              : '#0084C7',

                          px: 0.5,
                        }}
                      />

                    </TableCell>

                  </TableRow>

                ))}


                {/* No Results */}
                {filteredPatients.length === 0 && (

                  <TableRow>

                    <TableCell
                      colSpan={5}
                      align="center"
                      sx={{
                        py: 5,
                        color: '#6B7C8C',
                      }}
                    >
                      No patients found.
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


export default Patients