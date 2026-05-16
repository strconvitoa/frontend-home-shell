import { Separator } from '@/components/ui/separator';
import IntakeSum from '@/features/intakesum/IntakeSum';
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

export default function Intake() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Intake</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          counsel account activity / active portfolio
        </p>
      </section>

      {/* Action Buttons */}
      {/* <div className="flex justify-center gap-4 mb-24">
        <button className="bg-primary text-primary-foreground px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity">
          New Intake
        </button>
        <button className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors">
          Upload Doc
        </button>
        <button className="border border-border bg-background px-8 py-3 text-[10px] uppercase tracking-widest font-medium hover:bg-secondary transition-colors">
          Help
        </button>
      </div> */}

      {/* High-Level Stats */}
      <div className="grid grid-cols-3 gap-8 mb-32 border-b border-border pb-16">
        <div className="text-center">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Active Intake
          </span>
          <span className="text-5xl font-light">12</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            +2 This Month
          </span>
        </div>
        <div className="text-center border-x border-border">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Pending Intake
          </span>
          <span className="text-5xl font-light">08</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            3 Requiring Attention
          </span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            New
          </span>
          <span className="text-5xl font-light">04</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            Latest: Today 2pm
          </span>
        </div>
      </div>

      {/* Case List Section */}
      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            New Cases
          </h2>
          <button className="text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            All Cases
          </button>
        </div>

        <div className="space-y-12">
          {[
            {
              title: 'Harrison vs. Sterling Corp',
              ref: 'LJ-2024-0082',
              type: 'Real Estate',
              status: 'In Review',
              date: 'Oct 24',
            },
            {
              title: 'Estate of Lillian Thorne',
              ref: 'LJ-2024-0015',
              type: 'Probate',
              status: 'Awaiting Sig',
              date: 'Oct 22',
            },
            {
              title: 'Miller Family Trust',
              ref: 'LJ-2024-0102',
              type: 'Family Law',
              status: 'In Review',
              date: 'Oct 18',
            },
          ].map((item, i) => (
            <Dialog>
              <form>
                <DialogTrigger asChild>
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
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <IntakeSum />
                </DialogContent>
              </form>
            </Dialog>
          ))}
        </div>
      </div>
      <Separator />
      {/* Case List Section */}
      <div className="mb-24 mt-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Active Cases
          </h2>
          <button className="text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            All Cases
          </button>
        </div>

        <div className="space-y-12">
          {[
            {
              title: 'Harrison vs. Sterling Corp',
              ref: 'LJ-2024-0082',
              type: 'Real Estate',
              status: 'In Review',
              date: 'Oct 24',
            },
            {
              title: 'Estate of Lillian Thorne',
              ref: 'LJ-2024-0015',
              type: 'Probate',
              status: 'Awaiting Sig',
              date: 'Oct 22',
            },
            {
              title: 'Miller Family Trust',
              ref: 'LJ-2024-0102',
              type: 'Family Law',
              status: 'In Review',
              date: 'Oct 18',
            },
          ].map((item, i) => (
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
            <div>
              <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mb-2">
                Today 2:00 PM • Zoom
              </span>
              <h4 className="text-sm font-medium">
                Harrison vs. Sterling Corp
              </h4>
              <p className="text-[10px] text-muted-foreground">Property</p>
            </div>
            <div>
              <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mb-2">
                Tomorrow 10:30 AM • In-Person
              </span>
              <h4 className="text-sm font-medium">Initial Consultation</h4>
              <p className="text-[10px] text-muted-foreground">
                atty. marcus vance
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-12">
            Insights
          </h2>
          <div className="space-y-10">
            <div>
              <h4 className="text-sm font-medium mb-2">Housing Law Update</h4>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                New regulations affecting zoning disclosures for 2024 have been
                published.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">System Status</h4>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Encrypted cloud nodes have been successfully synchronized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
