import { Outlet } from 'react-router-dom';
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        {/* This is where the specific page (Dashboard, Cases, etc.) renders */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
