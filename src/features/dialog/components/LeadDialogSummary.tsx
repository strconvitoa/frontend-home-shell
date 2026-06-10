import React from 'react';
import { BrushCleaning, Check, Languages } from 'lucide-react';
import { Button, Input, Label } from '@/components';
import { Separator } from '@/components';
import { Progress } from '@/components/ui/progress';
import type { Lead } from '..';
type LeadSummaryProps = {
  lead: Lead;
};
export default function LeadDialogSummary({ lead }: LeadSummaryProps) {
  const {
    id,
    issue,
    area,
    status,
    date,
    urgency,
    quality,
    conflict,
    retention,
    lang,
    name,
    phone,
    email,
    summary,
  } = lead;
  return (
    <div>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Button
          variant="ghost"
          className="text-[10px] uppercase tracking-widest gap-2 font-normal"
        >
          <span className="text-lg">←</span> Back
        </Button>
        <div className="text-[10px] uppercase tracking-[0.4em] font-medium text-slate-500">
          Review
        </div>
        <div className="flex items-center gap-6">
          <Languages size={14} strokeWidth={1.5} />
          <span className="text-[9px] uppercase tracking-widest font-bold">
            {lang}
          </span>
        </div>
      </div>

      {/* Form Body */}
      <div className="bg-white px-24 py-16 space-y-10 mt-6">
        <Label>{name}</Label>
        <p className="text-xs tracking-[0.3em] text-muted-foreground">
          {phone}• {email}
        </p>
        <Separator />
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          FACTUAL SUMMARY
        </p>
        <div className="h-64 overflow-y-auto pr-4 scrollbar-thin">
          <p className="leading-relaxed">{summary}</p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-end px-12 py-8 bg-slate-50/50 border-t">
        <div className="flex gap-4">
          <Button>
            <BrushCleaning size={14} strokeWidth={0.5} />
            Discard
          </Button>
          <Button>
            <Check size={14} strokeWidth={0.5} />
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
