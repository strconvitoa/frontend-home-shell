import { Footer } from '../features/footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Send, Lock, ChevronDown, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export function New() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://127.0.0.1:8443/orgs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          busname: businessName,
          trade_name: tradeName,
          phone: phone,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
      }
      localStorage.setItem('profile', JSON.stringify(resdata.data));
      navigate('/overview');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // Theme-consistent styles
  const labelStyle =
    'block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2';
  const sectionLabelStyle =
    'text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-4';
  const inputStyle =
    'w-full bg-secondary/30 border border-border px-4 py-4 text-sm rounded-none outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/40';

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      {/* Main Content */}
      <div className="flex-1 flex justify-center px-8 py-16">
        {/* Form Container */}
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <Button
            onClick={() => navigate('/')}
            className="cursor-pointer mb-12 flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-4 py-2 hover:bg-secondary transition-colors rounded-none bg-transparent text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Button>

          <header className="mb-16 border-b border-border pb-8">
            <h1 className="text-3xl font-light mb-2">Account Registration</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Martian esq / Secure Onboarding
            </p>
          </header>

          <div className="space-y-12">
            {/* Section: Personal */}
            <div className="grid grid-cols-[160px_1fr] gap-8">
              <span className={sectionLabelStyle}>Identity</span>
              <div className="space-y-6">
                <div>
                  <label className={labelStyle}>Full Name</label>
                  <Input
                    type="text"
                    placeholder="first last"
                    className={inputStyle}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Work Email</label>
                  <Input
                    type="email"
                    placeholder="name@firm.com"
                    className={inputStyle}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Mobile number</label>
                  <Input
                    type="text"
                    placeholder="786-777-1000"
                    className={inputStyle}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Security Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className={inputStyle}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="border-border opacity-50" />

            {/* Section: Entity */}
            <div className="grid grid-cols-[160px_1fr] gap-8">
              <span className={sectionLabelStyle}>Entity</span>
              <div className="space-y-6">
                <div>
                  <label className={labelStyle}>Business Entity Name</label>
                  <Input
                    type="text"
                    placeholder="ABC Coffee Roasters, LLC"
                    className={inputStyle}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Trade Name (DBA)</label>
                  <Input
                    type="text"
                    placeholder="ABC Coffee"
                    className={inputStyle}
                    onChange={(e) => {
                      setTradeName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-20 pt-12 border-t border-border flex flex-col items-center">
            <Button
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-6 py-2 hover:bg-secondary transition-colors"
              onClick={createAccount}
              disabled={loading}
            >
              Create Account
              <Send size={12} className="rotate-[-15deg]" />
            </Button>
            <p className="mt-6 text-[9px] uppercase tracking-widest text-muted-foreground">
              Subject to credential verification
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default New;
