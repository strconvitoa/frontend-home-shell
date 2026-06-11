import logo from '../../../logo_icon.png';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LogOut,
  Settings,
  CircleUserRound,
  Bell,
  ShieldUser,
} from 'lucide-react';
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
import { useState, useEffect } from 'react';
import { type Profile } from '../../types/Profile';
import useProfileStore from '../../../stores/ProfileStore';
const Header = () => {
  const navigate = useNavigate();
  const storeProfile = useProfileStore((state) => state.profile);
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-200 hover:text-foreground tracking-widest ${
      isActive
        ? 'text-foreground border-b border-foreground pb-1'
        : 'text-muted-foreground'
    }`;
  const logout = () => {
    localStorage.removeItem('profile');
    navigate('/');
  };
  useEffect(() => {
    if (storeProfile != null) setProfile(storeProfile);
  }, []);
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
          <NavLink to="/overview" className={linkStyles}>
            Overview
          </NavLink>
          <NavLink to="/leads" className={linkStyles}>
            Leads
          </NavLink>
          {/* <NavLink to="/docs" className={linkStyles}>
            Documents
          </NavLink> */}
        </nav>

        {/* Action Icons / Profile */}
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">
            <Bell size={16} strokeWidth={0.5} />
          </div>

          <div className="flex items-center gap-3 pl-2 border-l border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <CircleUserRound size={16} strokeWidth={0.5} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel> {profile.name} 🧑‍🚀</DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() => {
                      navigate('/admin');
                    }}
                    className={`cursor-pointer ${profile.role === 'admin' ? '' : 'hidden'}`}
                  >
                    Admin <ShieldUser size={16} strokeWidth={0.5} />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      navigate('/settings');
                    }}
                    className="cursor-pointer"
                  >
                    Settings <Settings size={16} strokeWidth={0.5} />
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    Log out <LogOut size={16} strokeWidth={0.5} />
                  </DropdownMenuItem>
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
