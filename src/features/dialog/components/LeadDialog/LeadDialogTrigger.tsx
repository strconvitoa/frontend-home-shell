import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Siren,
  Shredder,
  GitMergeConflict,
  BrickWallShield,
} from 'lucide-react';
import type { Lead } from '../..';
type LeadDialogTriggerProps = {
  lead: Lead;
};
const LeadDialogTrigger = ({ lead, ...props }: LeadDialogTriggerProps) => {
  const {
    id,
    issue,
    area,
    status,
    created,
    urgency,
    quality,
    conflict,
    retention,
  } = lead;
  return (
    <div
      key={id}
      className="flex justify-between items-center group cursor-pointer"
      {...props}
    >
      <div>
        <span className="flex gap-1">
          <h3 className="text-lg font-medium mb-1">{issue}</h3>
        </span>
        <span className="flex ml-1 gap-2 text-[9px] uppercase tracking-widest text-muted-foreground">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                <Siren size={16} strokeWidth={0.5} /> {urgency}{' '}
                <span className="text-muted-foreground/50">·</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Urgency</p>
            </TooltipContent>
          </Tooltip>{' '}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                <Shredder size={16} strokeWidth={0.5} />
                {quality}{' '}
                <span className="text-muted-foreground/50">·</span>{' '}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quality</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                <GitMergeConflict size={16} strokeWidth={0.5} />
                {conflict} <span className="text-muted-foreground/50">·</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Conflict</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                <BrickWallShield size={16} strokeWidth={0.5} />
                {retention}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Retention</p>
            </TooltipContent>
          </Tooltip>
        </span>
      </div>
      <div className="flex gap-16 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
        <span className="w-24">{area}</span>
        <span className="w-24">{status}</span>
        <span className="w-24 text-right">{created}</span>
      </div>
    </div>
  );
};
export default LeadDialogTrigger;
