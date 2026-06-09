// ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useProfileStore from '../stores/ProfileStore';

export default function ProtectedRoute() {
  const profile = useProfileStore((state) => state.profile);

  // If there is no profile, redirect them to the login page
  if (!profile) {
    return <Navigate to="/" replace />;
  }

  // If there is a profile, render the child components (via Outlet)
  return <Outlet />;
}
