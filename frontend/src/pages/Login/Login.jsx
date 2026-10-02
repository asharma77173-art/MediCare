import { Box, Button, Paper, TextField, Typography } from '@mui/material'

function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          🏥 MediCare
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Clinic Management System
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          Login
        </Button>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 3 }}
        >
          Forgot Password?
        </Typography>
      </Paper>
    </Box>
  )
}

export default Login