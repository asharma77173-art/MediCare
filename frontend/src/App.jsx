```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Patients from './pages/Patients/Patients.jsx'
import Doctors from './pages/Doctors/Doctors.jsx'
import Appointments from './pages/Appointments/Appointments.jsx'
import Prescriptions from './pages/Prescriptions/Prescriptions.jsx'
import Billing from './pages/Billing/Billing.jsx'
import Reports from './pages/Reports/Reports.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Patients */}
        <Route path="/patients" element={<Patients />} />

        {/* Doctors */}
        <Route path="/doctors" element={<Doctors />} />

        {/* Appointments */}
        <Route path="/appointments" element={<Appointments />} />

        {/* Prescriptions */}
        <Route path="/prescriptions" element={<Prescriptions />} />

        {/* Billing */}
        <Route path="/billing" element={<Billing />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```