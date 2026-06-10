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
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect } from 'react';
import useProfileStore from '@/stores/ProfileStore';
import { type Profile } from '@/stores/ProfileStore';

export type User = {
  email?: string;
  id?: string;
  name?: string;
  org_id?: string;
  phone?: string;
  role?: 'admin' | 'member' | string;
  status?: 'active' | 'inactive' | string;
};
export default function Admin() {
  const storeProfile = useProfileStore((state) => state.profile);
  const [users, setUsers] = useState<[User]>([{ id: '' }]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [removeEmail, setRemoveEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({});
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  useEffect(() => {
    setProfile(storeProfile);
  }, [profile]);
  useEffect(() => {
    const featchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://127.0.0.1:8443/users?org_id=${profile.org_id}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resdata = await response.json();
        if (resdata.success == false) {
          console.log(`${resdata.error}`);
          return;
        }
        setUsers(resdata.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    if (Object.keys(profile).length !== 0) featchUsers();
  }, [profile]);

  const addUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://127.0.0.1:8443/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          org_id: profile.org_id,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success == false) {
        console.log(`${data.error}`);
      }
    } catch (err) {
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };
  const removeUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://127.0.0.1:8443/users/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: removeEmail,
          role: profile.role,
          org_id: profile.org_id,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success == false) {
        console.log(`${data.error}`);
      }
    } catch (err) {
    } finally {
      setLoading(false);
      setIsRemoveOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Admin</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          counsel account settings
        </p>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-24">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(true)}
            >
              Add User
              <UserPlus size={16} strokeWidth={0.5} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl bg-white">
            {/* 1. The Container must be flex */}
            <div className="flex items-center px-8 py-4 border-b border-slate-100">
              {/* 2. Left Section (Occupies 1/3 of space) */}
              <div className="flex-1">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    className="text-[10px] uppercase tracking-widest gap-2 font-normal h-auto py-1 pl-0 hover:bg-transparent"
                  >
                    <ArrowLeft size={16} strokeWidth={1.5} /> Back
                  </Button>
                </DialogClose>
              </div>

              {/* 3. Center Section (The Title) */}
              {/* We add 'flex-1' and 'text-center' to ensure it sits in the middle of the modal */}
              <div className="flex-1 text-[10px] uppercase tracking-[0.4em] font-medium text-slate-400 text-center">
                Add User
              </div>

              {/* 4. Right Section (Occupies 1/3 of space to balance the left) */}
              <div className="flex-1" />
            </div>

            {/* 2. Focused Form Body */}
            <div className="px-24 py-20">
              <form className="space-y-12">
                <div className="grid grid-cols-[180px_1fr] items-center gap-y-10">
                  {/* Name Field */}
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Full Name
                  </Label>
                  <Input
                    id="name-1"
                    placeholder="John Doe"
                    className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-lg font-light focus-visible:ring-0"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  {/* Email Field */}
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Email Address
                  </Label>
                  <Input
                    id="email-1"
                    placeholder="john.doe@gmail.com"
                    className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-sm font-light focus-visible:ring-0"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  {/* Role Select */}
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Account Role
                  </Label>
                  <Select
                    defaultValue={role}
                    onValueChange={(value) => setRole(value)}
                  >
                    <SelectTrigger className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-[10px] uppercase tracking-widest focus:ring-0">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </div>

            {/* 3. Footer with specific spacing */}
            <div className="flex items-center justify-end px-12 py-8 bg-slate-50/40 border-t border-slate-100 gap-6">
              <Button onClick={addUser}>
                <Check size={16} strokeWidth={1.5} className="mr-2" />
                Add <Send size={12} className="rotate-[-15deg]" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isRemoveOpen} onOpenChange={setIsRemoveOpen}>
          <DialogTrigger asChild>
            <Button className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors">
              Remove User
              <UserX size={16} strokeWidth={0.5} />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl bg-white">
            <div className="flex items-center px-8 py-4 border-b border-slate-100">
              <div className="flex-1">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    className="text-[10px] uppercase tracking-widest gap-2 font-normal h-auto py-1 pl-0 hover:bg-transparent"
                  >
                    <ArrowLeft size={16} strokeWidth={1.5} /> Back
                  </Button>
                </DialogClose>
              </div>

              <div className="flex-1 text-[10px] uppercase tracking-[0.4em] font-medium text-slate-400 text-center">
                Remove User
              </div>

              <div className="flex-1" />
            </div>

            <div className="px-24 py-20">
              <form className="space-y-12">
                <div className="grid grid-cols-[180px_1fr] items-center gap-y-10">
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Target Email
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="username-1"
                      name="username"
                      placeholder="john.doe@gmail.com"
                      className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-2 h-10 text-lg font-light focus-visible:ring-0 focus-visible:border-destructive transition-colors"
                      onChange={(e) => setRemoveEmail(e.target.value)}
                    />
                    <p className="text-[10px] text-destructive tracking-widest uppercase mt-2">
                      Warning: This action is permanent.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-end px-12 py-8 bg-slate-50/40 border-t border-slate-100 gap-8">
              <Button type="button" onClick={removeUser}>
                <Check size={16} strokeWidth={1.5} className="mr-2" />
                Remove
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* User List Section */}
      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            <span>Active Users</span>
          </h2>
          <div className="flex gap-16 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="w-24">Phone</span>
            <span className="w-24">Status</span>
            <span className="w-12 text-right">Role</span>
          </div>
        </div>

        <div className="space-y-12">
          {users.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center group cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                  email: {item.email}
                </span>
              </div>
              <div className="flex gap-16 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="w-24">{item.phone}</span>
                <span className="w-24">{item.status}</span>
                <span className="w-12 text-right">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
