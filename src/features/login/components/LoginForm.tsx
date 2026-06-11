import { useState } from 'react';
import logo from '../../../logo_icon.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, Rocket } from 'lucide-react';
import useProfileStore from '../../../stores/ProfileStore';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setProfile = useProfileStore((state) => state.setProfile);

  const submit = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://127.0.0.1:8443/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
        return;
      }
      localStorage.setItem('profile', JSON.stringify(resdata.data));
      setProfile(resdata.data);
      navigate('/overview');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const isActive = () => {
    if (loading === true) return false;
    if (email.length > 0 && password.length > 0) return true;
    return false;
  };

  // Consistency styles from global.css theme
  const labelStyle =
    'block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2';
  const inputStyle =
    'w-full bg-secondary/40 border border-border px-4 py-4 text-sm rounded-none outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/30';

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background font-sans text-foreground p-6">
      <div className="w-full max-w-sm">
        {/* Brand Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Martian" className="h-10 w-auto opacity-90" />
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
            Secure Portal / Auth Required
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-6 mb-8">
          <div>
            <label className={labelStyle}>Access Identity</label>
            <Input
              type="text"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Security Key</label>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
            />
          </div>
        </div>

        {/* Action Button */}
        <Button
          disabled={!isActive}
          className="w-full py-6 text-[11px] uppercase tracking-[0.3em] font-semibold rounded-none transition-all duration-300 bg-primary text-primary-foreground opacity-100 cursor-pointer flex items-center justify-center gap-2"
          onClick={submit}
        >
          <span>Log in</span>
          {loading ? (
            <Rocket
              size={16}
              strokeWidth={0.5}
              className="animate-[bounce_2s_infinite] ease-in-out"
            />
          ) : null}
        </Button>

        {/* Links & Recovery */}
        <div className="flex flex-col items-center mt-10 space-y-4">
          <Button
            onClick={() => navigate('/forgot')}
            className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Forgot Password?
          </Button>

          <div className="flex items-center gap-4 w-full py-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[8px] uppercase tracking-widest text-muted-foreground">
              Internal System
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <Button
            onClick={() => navigate('/new')}
            className="w-full rounded-none border-border text-[10px] uppercase tracking-widest hover:bg-secondary transition-colors cursor-pointer py-4"
          >
            Create Account
          </Button>
        </div>

        {/* Security Footer */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            <ShieldCheck size={12} className="text-muted-foreground" />
            Verified Encrypted Access
          </div>
        </div>
      </div>
    </div>
  );
}
