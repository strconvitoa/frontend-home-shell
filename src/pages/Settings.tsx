import {
  UserX,
  Plus,
  Save,
  X,
  Check,
  ArrowLeft,
  Send,
  Languages,
  UserPlus,
  Lock,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useProfileStore from '@/stores/ProfileStore';
import { type Profile } from '@/stores/ProfileStore';
import { useState, useEffect } from 'react';

export default function Settings() {
  const storeProfile = useProfileStore((state) => state.profile);
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [orgId, setOrgId] = useState('');
  const [removeEmail, setRemoveEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const labelStyle =
    'block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-2';
  const inputStyle =
    'w-full bg-secondary/30 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50';
  const sectionLabelStyle =
    'text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-3';

  useEffect(() => {
    const localprofile = JSON.parse(localStorage.getItem('profile') || '');
    setOrgId(localprofile.org_id);
    setProfile(localprofile);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Settings</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          counsel account settings
        </p>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full pt-20 pb-32 px-8">
        {/* Form Sections */}
        <div className="space-y-16">
          {/* Section: To (Personal Info) */}
          <div className="grid grid-cols-[120px_1fr] gap-8">
            <span className={sectionLabelStyle}>You</span>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Johnathan Doe"
                    className={inputStyle}
                    defaultValue={profile.name}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Role</label>
                  <input
                    type="text"
                    placeholder="member"
                    className={inputStyle}
                    defaultValue={profile.role}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Organaziation ID</label>
                  <input
                    type="text"
                    placeholder="+1555000-0000"
                    className={inputStyle}
                    defaultValue={profile.org_id}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    placeholder="j.doe@example.com"
                    className={inputStyle}
                    defaultValue={profile.email}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputStyle}
                    defaultValue={profile.phone}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
