
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from '@mui/material'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    if (
      email.trim() === 'admin@medicare.com' &&
      password === 'Admin123'
    ) {
      sessionStorage.setItem('medicareLoggedIn', 'true')
      navigate('/dashboard')
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          boxSizing: 'border-box',
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

        <Box component="form" onSubmit={handleLogin}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            margin="normal"
            autoComplete="username"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setError('')
            }}
          />

          <TextField
            fullWidth
            required
            label="Password"
            type="password"
            margin="normal"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              setError('')
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.3,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '16px',
            }}
          >
            Login
          </Button>
        </Box>

        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            bgcolor: '#f5f9ff',
          }}
        >
          <Typography
            variant="body2"
            align="center"
            fontWeight="bold"
            color="text.secondary"
          >
            Demo Login Credentials
          </Typography>

          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Email: admin@medicare.com
          </Typography>

          <Typography variant="body2" align="center">
            Password: Admin123
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default Login
