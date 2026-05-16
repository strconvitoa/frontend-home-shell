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
      <Route path="/intake-form" element={<IntakeForm />} />
      <Route element={<MainLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
