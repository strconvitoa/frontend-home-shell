import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface CaseSummaryCardProps {
  practiceArea?: string;
  urgency?: 'HIGH PRIORITY' | 'MEDIUM' | 'LOW';
  qualityScore?: number;
  hasConflicts?: boolean;
  retentionLikelihood?: string;
  retentionNote?: string;
}

export default function CaseSummaryCard({
  practiceArea = 'Medical Malpractice / Defamation',
  urgency = 'HIGH PRIORITY',
  qualityScore = 72,
  hasConflicts = false,
  retentionLikelihood = 'Medium-High',
  retentionNote = 'Based on initial engagement & financial standing.',
}: CaseSummaryCardProps) {
  return (
    <Card className="p-8 border-gray-100 shadow-sm bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Practice Area & Urgency */}
        <div className="space-y-4">
          <div>
            <span className="block uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Practice Area
            </span>
            <h4 className="text-lg font-semibold text-slate-900 mt-1">
              {practiceArea}
            </h4>
          </div>
          <div>
            <span className="block uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Urgency
            </span>
            <div className="mt-2">
              <Badge
                variant={
                  urgency === 'HIGH PRIORITY' ? 'destructive' : 'secondary'
                }
                className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              >
                {urgency}
              </Badge>
            </div>
          </div>
        </div>

        {/* Center Column: Score & Conflicts */}
        <div className="space-y-4">
          <div>
            <span className="block uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Case Quality Score
            </span>
            <div className="flex items-center gap-4 mt-2">
              <Progress
                value={qualityScore}
                className="w-32 h-2 bg-slate-100"
              />
              <span className="text-sm font-bold text-slate-900">
                {qualityScore}/100
              </span>
            </div>
          </div>
          <div>
            <span className="block uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Conflict Check
            </span>
            <div className="flex items-center gap-2 mt-2">
              {hasConflicts ? (
                <>
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-red-600">
                    Conflicts Identified
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-600">
                    No Conflicts Found
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Retention Likelihood */}
        <div className="space-y-1">
          <span className="block uppercase tracking-widest text-gray-500 text-[10px] font-bold">
            Retention Likelihood
          </span>
          <h4 className="text-lg font-semibold text-slate-900 mt-1">
            {retentionLikelihood}
          </h4>
          {retentionNote && (
            <p className="text-[11px] text-slate-400 italic leading-tight mt-1">
              {retentionNote}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
