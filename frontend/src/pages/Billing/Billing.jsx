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


function Billing() {

  const [search, setSearch] = useState('')

  const bills = [
    {
      invoice: 'INV-2048',
      patient: 'Olivia Martin',
      service: 'Consultation',
      amount: '$120.00',
      status: 'Paid',
    },
    {
      invoice: 'INV-2047',
      patient: 'Ethan Williams',
      service: 'Cardiac review',
      amount: '$240.00',
      status: 'Pending',
    },
    {
      invoice: 'INV-2046',
      patient: 'Sophia Brown',
      service: 'Lab tests',
      amount: '$185.00',
      status: 'Overdue',
    },
    {
      invoice: 'INV-2045',
      patient: 'Noah Davis',
      service: 'Consultation',
      amount: '$95.00',
      status: 'Paid',
    },
  ]


  const filteredBills = bills.filter(
    (bill) =>
      bill.invoice
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      bill.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      bill.service
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
              Billing
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#5C7080',
                mt: 1,
              }}
            >
              Manage and review your clinic's billing.
            </Typography>

          </Box>


          {/* Add Bill Button */}
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
            Add Bill
          </Button>

        </Box>


        {/* Billing Card */}
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
                All billing
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#6B7C8C',
                  mt: 0.3,
                }}
              >
                {filteredBills.length} records in this view
              </Typography>

            </Box>


            {/* Search */}
            <TextField
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search billing..."
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


          {/* Billing Table */}
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
                    INVOICE
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
                    SERVICE
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
                    AMOUNT
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

                {filteredBills.map((bill) => (

                  <TableRow
                    key={bill.invoice}
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
                      {bill.invoice}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {bill.patient}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {bill.service}
                    </TableCell>


                    <TableCell
                      sx={{
                        color: '#607D8B',
                        py: 2,
                      }}
                    >
                      {bill.amount}
                    </TableCell>


                    <TableCell
                      sx={{
                        py: 2,
                      }}
                    >

                      <Chip
                        label={bill.status}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          borderRadius: '20px',
                          px: 0.5,

                          backgroundColor:
                            bill.status === 'Paid'
                              ? '#DDF7E8'
                              : bill.status === 'Pending'
                                ? '#D9F2FF'
                                : '#FFE5EF',

                          color:
                            bill.status === 'Paid'
                              ? '#087443'
                              : bill.status === 'Pending'
                                ? '#0084C7'
                                : '#D14D72',
                        }}
                      />

                    </TableCell>

                  </TableRow>

                ))}


                {/* No Results */}
                {filteredBills.length === 0 && (

                  <TableRow>

                    <TableCell
                      colSpan={5}
                      align="center"
                      sx={{
                        py: 5,
                        color: '#6B7C8C',
                      }}
                    >
                      No billing records found.
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


export default Billing