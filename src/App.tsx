import { Routes, Route } from 'react-router-dom';
import {
  About,
  Forgot,
  Home,
  New,
  Overview,
  Intake,
  IntakeForm,
  Docs,
  Settings,
  Reset,
} from './pages';
import ProtectedRoute from './pages/ProtectedRoute';
import { MainLayout } from './layouts';

import './index.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/about" element={<About />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/thank-you" element={<IntakeForm />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/leads" element={<Intake />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
