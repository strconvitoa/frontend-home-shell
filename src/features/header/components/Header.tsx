import logo from '../../../logo_icon.png';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  // Navigation link styling logic to match the active state in screen.png
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-200 hover:text-foreground tracking-widest ${
      isActive
        ? 'text-foreground border-b border-foreground pb-1'
        : 'text-muted-foreground'
    }`;

  return (
    <header className="w-full bg-background border-b border-transparent">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center tracking-[0.25em] uppercase text-[11px] font-semibold text-foreground">
          <img src={logo} alt="Martian" className="h-4 w-4 object-cover" />
          <span className="pl-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Martian
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-10 text-[10px] uppercase tracking-[0.15em] font-medium">
          {/* <NavLink to="/overview" className={linkStyles}>
            Overview
          </NavLink> */}
          <NavLink to="/intake" className={linkStyles}>
            Intake
          </NavLink>
          {/* <NavLink to="/docs" className={linkStyles}>
            Documents
          </NavLink> */}
          <NavLink to="/settings" className={linkStyles}>
            Settings
          </NavLink>
        </nav>

        {/* Action Icons / Profile */}
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <div className="flex items-center gap-3 pl-2 border-l border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>🧑‍🚀</DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
