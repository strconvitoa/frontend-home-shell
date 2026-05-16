import React from 'react';
import { Trash2, Check, Languages } from 'lucide-react';
import { Button, Input, Label } from '@/components';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components';
import { Separator } from '@/components';
import { Progress } from '@/components/ui/progress';

export default function IntakeSum() {
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
          Intake Review
        </div>
        <div className="flex items-center gap-6">
          <Languages size={14} strokeWidth={1.5} />
          <span className="text-[9px] uppercase tracking-widest font-bold">
            EN
          </span>
        </div>
      </div>

      {/* Form Body */}
      <div className="bg-white px-24 py-16 space-y-10 mt-6">
        <Label>John Doe</Label>
        <p className="text-xs tracking-[0.3em] text-muted-foreground">
          954-435-9475 • jhon.doe@gmail.com
        </p>
        <Separator />
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          FACTUAL SUMMARY
        </p>
        <div className="h-64 overflow-y-auto pr-4 scrollbar-thin">
          <p className="leading-relaxed">
            A doctor claimed that damaging rumors about him were being spread.
            He tried to prove this by testifying about what another doctor told
            him. According to his testimony, that other doctor said that a third
            person had just made serious accusations about the doctor’s
            competence and patient outcomes. The problem was that no one who
            actually heard the original remarks testified, and the doctor relied
            on repeating what he had been told secondhand. The court had to
            decide whether this repeated statement could be used as evidence,
            even though it was said outside the courtroom.A doctor claimed that
            damaging rumors about him were being spread. He tried to prove this
            by testifying about what another doctor told him. According to his
            testimony, that other doctor said that a third person had just made
            serious accusations about the doctor’s competence and patient
            outcomes.
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-end px-12 py-8 bg-slate-50/50 border-t">
        <div className="flex gap-4">
          <Button variant="ghost">
            <Trash2 size={14} strokeWidth={1.5} />
            Discard
          </Button>
          <Button>
            <Check size={14} strokeWidth={1.5} />
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
