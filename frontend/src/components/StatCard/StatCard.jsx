import { Card, CardContent, Typography, Box } from '@mui/material'

function StatCard({ title, value, description, icon }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        border: '1px solid #D9EFEB',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 10px rgba(22, 138, 173, 0.06)',
        height: '100%',
      }}
    >
      <CardContent sx={{ p: 3 }}>

        {/* Icon */}
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E8F8F5',
            color: '#168AAD',
            mb: 3,
          }}
        >
          {icon}
        </Box>

        {/* Title */}
        <Typography
          variant="body2"
          sx={{
            color: '#5F777B',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        {/* Value */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: '#183B42',
            mb: 1,
          }}
        >
          {value}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#5F777B',
          }}
        >
          {description}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default StatCard