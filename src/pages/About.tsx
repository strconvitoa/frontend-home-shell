import { Footer } from '../features/footer';

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 bg-white">
        <div className="w-1/2 flex flex-col items-center justify-center px-12">
          login
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center border-l border-gray-200 px-12"></div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
