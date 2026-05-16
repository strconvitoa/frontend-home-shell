import { useNavigate } from 'react-router-dom';
type FooterLink = {
  label: string;
  href?: string;
};

// const links: FooterLink[] = [{label:"About",href:"about"}];
const links: FooterLink[] = [];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-500">
        {/* Top links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          {links.map((link) => (
            <a
              key={link.label}
              onClick={() => navigate(`/${link.href}`)}
              className="cursor-pointer hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex justify-center items-center gap-4 text-xs">
          <span>
            © 2026{' '}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"></span> */}
            Martian.Esq
          </span>

          <span>•</span>
          <span>
            Made with <span className="text-red-500">❤️</span> in NYC{' '}
            <span className="text-teal-500">🗽</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
