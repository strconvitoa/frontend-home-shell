import { Button } from '@/components/ui/button';
import { BadgePlus, Upload, BadgeQuestionMark } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Overview() {
  const [activeCases, setActiveCases] = useState(0);
  const [pendingDocs, setPendingDocs] = useState(0);
  const [meetings, setMeetings] = useState(0);
  const [cases, setCases] = useState([]);
  const [insight, setInsight] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Overview</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          counsel account activity / active portfolio
        </p>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-24">
        <Button
          className="bg-primary text-primary-foreground px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
          disabled
        >
          New Leads
          <BadgePlus size={16} strokeWidth={0.5} />
        </Button>
        <Button
          className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors"
          disabled
        >
          Upload Doc
          <Upload size={16} strokeWidth={0.5} />
        </Button>
        <Button
          className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors"
          disabled
        >
          Help
          <BadgeQuestionMark size={16} strokeWidth={0.5} />
        </Button>
      </div>

      {/* High-Level Stats */}
      <div className="grid grid-cols-3 gap-8 mb-32 border-b border-border pb-16">
        <div className="text-center">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Active Cases
          </span>
          <span className="text-5xl font-light">{activeCases}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            +0 This Month
          </span>
        </div>
        <div className="text-center border-x border-border">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Pending Docs
          </span>
          <span className="text-5xl font-light">{pendingDocs}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            0 Requiring Attention
          </span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Meetings
          </span>
          <span className="text-5xl font-light">{meetings}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            Next: Today 2pm
          </span>
        </div>
      </div>

      {/* Case List Section */}
      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Active Cases
          </h2>
          <button className="text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            All Cases
          </button>
        </div>

        <div className="space-y-12">
          {cases.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center group cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                  Ref: {item.ref}
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

      {/* Bottom Grid: Upcoming & Insights */}
      <div className="grid grid-cols-2 gap-24 mb-32">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-12">
            Upcoming
          </h2>
          <div className="space-y-10">
            {upcoming.map(() => {
              return (
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mb-2">
                    Today 2:00 PM • Zoom
                  </span>
                  <h4 className="text-sm font-medium">Pre-trial Review</h4>
                  <p className="text-[10px] text-muted-foreground">
                    atty. sarah jenkins
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-12">
            Insights
          </h2>
          <div className="space-y-10">
            {insight.map(() => {
              return (
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Housing Law Update
                  </h4>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    New regulations affecting zoning disclosures for 2024 have
                    been published.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
