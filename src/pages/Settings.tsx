import {
  Trash2,
  Plus,
  Save,
  X,
  Check,
  ArrowLeft,
  Languages,
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

export default function Settings() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Settings</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          counsel account settings
        </p>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-24">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="text-[10px] uppercase tracking-widest gap-2 hover:text-destructive"
            >
              Add User
              <Plus size={14} strokeWidth={1.5} />
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
                    defaultValue="John Doe"
                    className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-lg font-light focus-visible:ring-0"
                  />

                  {/* Email Field */}
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Email Address
                  </Label>
                  <Input
                    id="email-1"
                    defaultValue="john.doe@gmail.com"
                    className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-sm font-light focus-visible:ring-0"
                  />

                  {/* Role Select */}
                  <Label className="text-right pr-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-normal">
                    Account Role
                  </Label>
                  <Select defaultValue="user">
                    <SelectTrigger className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-5 h-10 text-[10px] uppercase tracking-widest focus:ring-0">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </div>

            {/* 3. Footer with specific spacing */}
            <div className="flex items-center justify-end px-12 py-8 bg-slate-50/40 border-t border-slate-100 gap-6">
              <Button>
                <Check size={16} strokeWidth={1.5} className="mr-2" />
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="text-[10px] uppercase tracking-widest gap-2 hover:text-destructive"
            >
              Delete User
              <Trash2 size={14} strokeWidth={1.5} />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl bg-white">
            {/* 1. Balanced Header (Three-Column Flex) */}
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
              {/* 3. Center Section (The Title) */}
              {/* We add 'flex-1' and 'text-center' to ensure it sits in the middle of the modal */}
              <div className="flex-1 text-[10px] uppercase tracking-[0.4em] font-medium text-slate-400 text-center">
                Delete User
              </div>

              {/* 4. Right Section (Occupies 1/3 of space to balance the left) */}
              <div className="flex-1" />
            </div>

            {/* 2. Minimalist Form Body */}
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
                      defaultValue="john.doe@gmail.com"
                      className="border-t-0 border-x-0 border-b border-slate-200 rounded-none px-2 h-10 text-lg font-light focus-visible:ring-0 focus-visible:border-destructive transition-colors"
                    />
                    <p className="text-[10px] text-destructive tracking-widest uppercase mt-2">
                      Warning: This action is permanent.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* 3. Footer Actions (Justify End) */}
            <div className="flex items-center justify-end px-12 py-8 bg-slate-50/40 border-t border-slate-100 gap-8">
              <Button type="submit">
                <Check size={16} strokeWidth={1.5} className="mr-2" />
                Accept
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* User List Section */}
      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Active Users
          </h2>
        </div>

        <div className="space-y-12">
          {[
            {
              name: 'John Doe',
              email: 'john.doe@gmail.com',
              type: 'Admin',
              status: 'Active',
              date: 'Oct 24',
            },
            {
              name: 'John Doe',
              email: 'john.doe@gmail.com',
              type: 'Admin',
              status: 'Active',
              date: 'Oct 24',
            },
            {
              name: 'John Doe',
              email: 'john.doe@gmail.com',
              type: 'User',
              status: 'Active',
              date: 'Oct 24',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center group cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                  email: {item.email}
                </span>
              </div>
              <div className="flex gap-16 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="w-24">{item.type}</span>
                <span className="w-24">{item.status}</span>
                <span className="w-12 text-right">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
