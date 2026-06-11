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
type LeadDialogProp = {
  lead: Lead;
};
const LeadDialog = ({ lead }: LeadDialogProp) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <LeadDialogTrigger lead={lead} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogTitle className="sr-only">Lead Details</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed view and management summary for this lead.
        </DialogDescription>
        <LeadDialogSummary lead={lead} />
      </DialogContent>
    </Dialog>
  );
};
export default LeadDialog;
