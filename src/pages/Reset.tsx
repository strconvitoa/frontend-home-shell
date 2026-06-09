import logo from '../logo_icon.png';
import { Footer } from '../features/footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Reset() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://127.0.0.1:8443/auth/change-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            email: email,
            password: password,
          }),
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
      }
      navigate('/');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const labelStyle =
    'block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3';

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 py-20">
        {/* Form Container */}
        <div className="w-full max-w-sm">
          <div className="mb-12  flex items-center gap-2">
            <div className="flex items-center tracking-[0.25em] uppercase text-[11px] font-semibold text-foreground">
              <img src={logo} alt="Martian" className="h-4 w-4 object-cover" />
              <span className="pl-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Martian
              </span>
            </div>
          </div>
          <h1 className="text-[11px] uppercase tracking-[0.25em] font-bold text-foreground mb-12">
            Confirm Your Account
          </h1>

          {/* Work Email Section */}
          <div className="mb-8">
            <label className={labelStyle}>Work Email</label>

            <Input
              type="email"
              placeholder="work email"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mb-8">
            <label className={labelStyle}>Verification Code</label>

            <Input
              type="text"
              placeholder="verification code"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
          </div>

          <div className="mb-8">
            <label className={labelStyle}>New Password</label>

            <Input
              type="password"
              placeholder="new password"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Submit Button - Styled like the 'Send Intake' button */}
          <Button
            className="w-full bg-primary text-primary-foreground py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:opacity-90 transition-opacity rounded-none"
            onClick={submit}
            disabled={loading}
          >
            Submit
          </Button>

          <p className="mt-8 text-center text-[10px] text-muted-foreground tracking-wide">
            spread love ❤️ is the brooklyn way
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Reset;
