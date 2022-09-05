import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import Home from './pages/Home';
import './App.css';
import Layout from './components/Layout';
import { RoutePath } from './constants/routes-paths';
import Login from './pages/Login';
import Registration from './pages/Registration';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutePath?.HOME} element={<Home />} />
          <Route path={RoutePath?.LOGIN} element={<Login />} />
          <Route path={RoutePath?.REGISTER} element={<Registration />} />
        </Routes>
      </Layout>
    </Router>
  );
}
