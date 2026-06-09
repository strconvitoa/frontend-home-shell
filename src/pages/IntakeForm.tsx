import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Send, Lock, ChevronDown, Calendar } from 'lucide-react';
import { Footer } from '@/features/footer';

const IntakePage = () => {
  const labelStyle =
    'block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-2';
  const inputStyle =
    'w-full bg-secondary/30 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all placeholder:text-muted-foreground/50';
  const sectionLabelStyle =
    'text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-3';

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header Navigation */}
      <header className="px-8 h-20 flex justify-between items-center border-b border-transparent">
        <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-4 py-2 hover:bg-secondary transition-colors">
          <ChevronLeft size={14} />
          Back
        </button>

        <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground pl-12">
          Form
        </div>

        <div className="flex items-center gap-6">
          {/* <button className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            Save & Exit
          </button> */}
          <Button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-6 py-2 hover:bg-secondary transition-colors">
            Submit
            <Send size={12} className="rotate-[-15deg]" />
          </Button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full pt-20 pb-32 px-8">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-light mb-6">Initial Consultation</h1>
          <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed tracking-wide">
            All information is handled with strict confidentiality. Please
            provide details to help our team prepare.
          </p>
        </div>

        {/* Form Sections */}
        <div className="space-y-16">
          {/* Section: To (Personal Info) */}
          <div className="grid grid-cols-[120px_1fr] gap-8">
            <span className={sectionLabelStyle}>You</span>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Johnathan Doe"
                  className={inputStyle}
                />
              </div>
              <div>
                <label className={labelStyle}>Email Address</label>
                <input
                  type="email"
                  placeholder="j.doe@example.com"
                  className={inputStyle}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Body */}
          <div className="grid grid-cols-[120px_1fr] gap-8">
            <span className={sectionLabelStyle}>Issue</span>
            <div>
              <label className={labelStyle}>Case Description</label>
              <textarea
                rows={10}
                placeholder="Please describe the core details of your matter..."
                className={`${inputStyle} resize-none`}
              />
            </div>
          </div>

          {/* Section: History */}
          <div className="grid grid-cols-[120px_1fr] gap-8">
            <span className={sectionLabelStyle}>History</span>
            <div className="space-y-8">
              <div>
                <label className="text-[11px] text-muted-foreground mb-4 block">
                  Previous legal counsel for this matter?
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 text-sm cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center group-hover:border-foreground">
                      <div className="w-2 h-2 rounded-full bg-transparent" />
                    </div>
                    Yes
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-foreground flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className={labelStyle}>Previous Attorney/Firm</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Submit */}
        <div className="mt-32 pt-16 border-t border-border/50 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <Lock size={12} />
            256-bit encryption active
          </div>
          <Button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-border px-6 py-2 hover:bg-secondary transition-colors">
            Submit
            <Send size={12} className="rotate-[-15deg]" />
          </Button>
        </div>
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default IntakePage;
