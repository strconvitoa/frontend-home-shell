import { Footer } from '../features/footer';
import { LoginForm } from '../features/login/index';
// import Promo from '../components/Promo';
import { Promo } from '../features/promo/index';

export function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row min-h-0 overflow-hidden">
        {/* Left Promo Section */}
        <div className="hidden lg:flex lg:w-2/3 flex-col items-center justify-center px-12">
          <Promo />
        </div>

        {/* Right Login Section */}
        <div
          className="
          w-full
          lg:w-2/3
          flex
          flex-col
          items-center
          justify-center
          px-6
          sm:px-10
          lg:px-12
          lg:border-l"
        >
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
