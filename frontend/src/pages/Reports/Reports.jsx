import {
  Box,
  Typography,
  Paper,
} from '@mui/material'

import Navbar from '../../components/Navbar/Navbar.jsx'


function Reports() {

  // Last 7 months
  const monthlyVisits = [
    { month: 'Jun', value: 350 },
    { month: 'Jul', value: 410 },
    { month: 'Aug', value: 450 },
    { month: 'Sep', value: 486 },
    { month: 'Oct', value: 520 },
    { month: 'Nov', value: 560 },
    { month: 'Dec', value: 610 },
  ]


  // ================= GRAPH SETTINGS =================

  const chartWidth = 900
  const chartHeight = 280

  // Space around graph so first/last labels are not cut
  const paddingLeft = 35
  const paddingRight = 35
  const paddingTop = 20
  const paddingBottom = 45

  const graphWidth =
    chartWidth - paddingLeft - paddingRight

  const graphHeight =
    chartHeight - paddingTop - paddingBottom


  const minValue = 300
  const maxValue = 650


  // ================= GRAPH POINTS =================

  const points = monthlyVisits
    .map((item, index) => {

      const x =
        paddingLeft +
        (index / (monthlyVisits.length - 1)) *
          graphWidth

      const y =
        paddingTop +
        graphHeight -
        ((item.value - minValue) /
          (maxValue - minValue)) *
          graphHeight

      return {
        x,
        y,
        value: item.value,
        month: item.month,
      }
    })


  const linePoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(' ')


  // Area under graph
  const areaPoints = `
    ${paddingLeft},${paddingTop + graphHeight}
    ${linePoints}
    ${paddingLeft + graphWidth},${paddingTop + graphHeight}
  `


  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F5FAFC',
      }}
    >

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= MAIN CONTENT ================= */}

      <Box
        sx={{
          px: {
            xs: 2,
            md: 3,
          },
          py: 3,
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

        <Box sx={{ mb: 4 }}>

          <Typography
            variant="h3"
            fontWeight="500"
            sx={{
              color: '#102A43',
              lineHeight: 1.1,
            }}
          >
            Reports
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#5C7080',
              mt: 1,
            }}
          >
            Manage and review your clinic's reports.
          </Typography>

        </Box>


        {/* ================= STAT CARDS ================= */}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >

          {/* Monthly Revenue */}

          <Paper
            sx={{
              p: 3,
              borderRadius: '16px',
              border: '1px solid #D5E4EA',
              boxShadow: 'none',
              backgroundColor: '#FFFFFF',
            }}
          >

            <Typography
              variant="body2"
              sx={{
                color: '#526777',
                mb: 1,
              }}
            >
              Monthly revenue
            </Typography>

            <Typography
              variant="h4"
              fontWeight="600"
              sx={{
                color: '#102A43',
              }}
            >
              $38,420
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#008A63',
                fontWeight: 600,
                mt: 1,
              }}
            >
              +12.5% this month
            </Typography>

          </Paper>


          {/* Patient Visits */}

          <Paper
            sx={{
              p: 3,
              borderRadius: '16px',
              border: '1px solid #D5E4EA',
              boxShadow: 'none',
              backgroundColor: '#FFFFFF',
            }}
          >

            <Typography
              variant="body2"
              sx={{
                color: '#526777',
                mb: 1,
              }}
            >
              Patient visits
            </Typography>

            <Typography
              variant="h4"
              fontWeight="600"
              sx={{
                color: '#102A43',
              }}
            >
              486
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#008A63',
                fontWeight: 600,
                mt: 1,
              }}
            >
              +8.2% this month
            </Typography>

          </Paper>


          {/* Collection Rate */}

          <Paper
            sx={{
              p: 3,
              borderRadius: '16px',
              border: '1px solid #D5E4EA',
              boxShadow: 'none',
              backgroundColor: '#FFFFFF',
            }}
          >

            <Typography
              variant="body2"
              sx={{
                color: '#526777',
                mb: 1,
              }}
            >
              Collection rate
            </Typography>

            <Typography
              variant="h4"
              fontWeight="600"
              sx={{
                color: '#102A43',
              }}
            >
              94.8%
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#008A63',
                fontWeight: 600,
                mt: 1,
              }}
            >
              +2.1% this month
            </Typography>

          </Paper>

        </Box>


        {/* ================= PATIENT VISITS CHART ================= */}

        <Paper
          sx={{
            mt: 3,
            p: {
              xs: 2,
              md: 3,
            },
            borderRadius: '16px',
            border: '1px solid #D5E4EA',
            boxShadow: 'none',
            backgroundColor: '#FFFFFF',
          }}
        >

          {/* Chart Header */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 2,
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
                Patient visits
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#607D8B',
                  mt: 0.5,
                }}
              >
                Last 7 months
              </Typography>

            </Box>


            {/* Chart Icon */}

            <Typography
              sx={{
                fontSize: '28px',
                color: '#0096C7',
                lineHeight: 1,
              }}
            >
              〽
            </Typography>

          </Box>


          {/* ================= GRAPH ================= */}

          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
            }}
          >

            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              width="100%"
              height="300"
              style={{
                display: 'block',
              }}
            >

              {/* ================= GRID LINES ================= */}

              {[0, 1, 2, 3, 4].map((line) => {

                const y =
                  paddingTop +
                  (line / 4) * graphHeight

                return (
                  <line
                    key={line}
                    x1={paddingLeft}
                    y1={y}
                    x2={paddingLeft + graphWidth}
                    y2={y}
                    stroke="#E6EFF3"
                    strokeWidth="1"
                  />
                )
              })}


              {/* ================= AREA ================= */}

              <polygon
                points={areaPoints}
                fill="#E8F7FB"
              />


              {/* ================= MAIN LINE ================= */}

              <polyline
                points={linePoints}
                fill="none"
                stroke="#0096C7"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />


              {/* ================= DATA POINTS ================= */}

              {points.map((point) => (

                <circle
                  key={point.month}
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="#FFFFFF"
                  stroke="#0096C7"
                  strokeWidth="3"
                />

              ))}


              {/* ================= MONTH LABELS ================= */}

              {points.map((point) => (

                <text
                  key={point.month}
                  x={point.x}
                  y={chartHeight - 10}
                  textAnchor="middle"
                  fill="#607D8B"
                  fontSize="14"
                  fontFamily="Arial, sans-serif"
                >
                  {point.month}
                </text>

              ))}

            </svg>

          </Box>

        </Paper>

      </Box>

    </Box>
  )
}


export default Reports