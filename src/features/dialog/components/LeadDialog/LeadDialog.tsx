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
import LeadDialogSummary from './LeadDialogSummary';
import LeadDialogTrigger from './LeadDialogTrigger';
import type { Lead } from '../..';
import { useState, useEffect } from 'react';
type LeadDialogProp = {
  lead: Lead;
  accept: (leadID: string) => void;
  discard: (leadID: string) => void;
};
const LeadDialog = ({ lead, accept, discard }: LeadDialogProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const loadDialogAction = (act: number) => {
    if (act === 0) setIsOpen(false);
    if (act === 1) {
      discard(lead.id || '');
      setIsOpen(false);
    }
    if (act === 2) {
      accept(lead.id || '');
      setIsOpen(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <LeadDialogTrigger lead={lead} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl [&>button]:hidden">
        <DialogTitle className="sr-only">Lead Details</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed view and management summary for this lead.
        </DialogDescription>
        <LeadDialogSummary lead={lead} action={loadDialogAction} />
      </DialogContent>
    </Dialog>
  );
};
export default LeadDialog;
