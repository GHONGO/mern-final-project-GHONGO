import { Link, Route, Routes } from 'react-router-dom';
import DashboardUser from './pages/DashboardUser.jsx';
import DashboardInstructor from './pages/DashboardInstructor.jsx';
import DashboardAdmin from './pages/DashboardAdmin.jsx';

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">User</Link>
        <Link to="/instructor">Instructor</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardUser />} />
        <Route path="/instructor" element={<DashboardInstructor />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
}


