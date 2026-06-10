import { Separator } from '@/components/ui/separator';
import { LeadDialog } from '@/features/dialog';

export default function Intake() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2">Leads</h1>
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
            Active Leads
          </span>
          <span className="text-5xl font-light">12</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            +2 This Month
          </span>
        </div>
        <div className="text-center border-x border-border">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Pending Leads
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
            Leads
          </h2>
          <button className="text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            All Leads
          </button>
        </div>

        <div className="space-y-12">
          {[
            {
              email: 'm.jones@gmail.com',
              name: 'mike jones',
              id: '34234243552233',
              lang: 'en',
              summary:
                'car accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acar ',
              issue: 'negligance',
              phone: '111-333-4444',
              date: '01/02/2026',
              area: 'torts',
              urgency: 'immediate',
              quality: 'good',
              conflict: 'clear',
              retention: 'high',
              status: 'new',
            },
            {
              email: 'm.jones@gmail.com',
              name: 'mike jones',
              id: '34234243552233',
              lang: 'en',
              summary:
                'car accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acar ',
              issue: 'negligance',
              phone: '111-333-4444',
              date: '01/02/2026',
              area: 'torts',
              urgency: 'immediate',
              quality: 'good',
              conflict: 'clear',
              retention: 'high',
              status: 'new',
            },
            {
              email: 'm.jones@gmail.com',
              name: 'mike jones',
              id: '34234243552233',
              lang: 'en',
              summary:
                'car accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acar ',
              issue: 'negligance',
              phone: '111-333-4444',
              date: '01/02/2026',
              area: 'torts',
              urgency: 'immediate',
              quality: 'good',
              conflict: 'clear',
              retention: 'high',
              status: 'new',
            },
          ].map((item, i) => (
            <LeadDialog lead={item} />
          ))}
        </div>
      </div>
      <Separator />
      {/* Case List Section */}
      <div className="mb-24 mt-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Discarded Leads
          </h2>
          <button className="text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            All Leads
          </button>
        </div>

        <div className="space-y-12">
          {[
            {
              email: 'm.jones@gmail.com',
              name: 'mike jones',
              id: '34234243552233',
              lang: 'en',
              summary:
                'car accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acarcar accident hit and run by acar ',
              issue: 'negligance',
              phone: '111-333-4444',
              date: '01/02/2026',
              area: 'torts',
              urgency: 'immediate',
              quality: 'good',
              conflict: 'clear',
              retention: 'high',
              status: 'new',
            },
          ].map((item, i) => (
            <LeadDialog lead={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
