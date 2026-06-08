import { Footer } from '../features/footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Reset() {
  const navigate = useNavigate();

  // Shared styles to match the Intake/Overview pages
  const labelStyle =
    'block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3';

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 py-20">
        {/* Form Container */}
        <div className="w-full max-w-sm">
          {/* Back Button - Styled like the Intake Page */}
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-12 cursor-pointer flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-4 py-2 hover:bg-secondary transition-colors rounded-none"
          >
            <ArrowLeft size={14} />
            Back
          </Button>

          {/* Brand Identity */}
          <h1 className="text-[11px] uppercase tracking-[0.25em] font-bold text-foreground mb-12">
            Martian.Esq
          </h1>

          {/* Work Email Section */}
          <div className="mb-8">
            <label className={labelStyle}>Work Email</label>

            <Input
              type="email"
              placeholder="work email"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="mb-8">
            <label className={labelStyle}>Verification Code</label>

            <Input
              type="text"
              placeholder="verification code"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="mb-8">
            <label className={labelStyle}>New Password</label>

            <Input
              type="password"
              placeholder="new password"
              /* Use your theme's input/border variables and lower radius */
              className="w-full bg-secondary/30 border border-border px-4 py-4 rounded-md outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Submit Button - Styled like the 'Send Intake' button */}
          <Button className="w-full bg-primary text-primary-foreground py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:opacity-90 transition-opacity rounded-none">
            Reset
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
