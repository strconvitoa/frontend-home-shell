import { Separator } from '@/components/ui/separator';
import { LeadDialog } from '@/features/dialog';
import useProfileStore from '@/stores/ProfileStore';
import { type Profile } from '@/stores/ProfileStore';
import { useState, useEffect } from 'react';
import { type Lead } from '@/features/dialog/types/Lead';

export default function Leads() {
  const storeProfile = useProfileStore((state) => state.profile);
  const [lead, setLeads] = useState<[Lead]>([{}]);
  const [pendingLead, setPendingLeads] = useState<[Lead]>([{}]);
  const [discardedleads, setDiscardedleads] = useState<[Lead]>([{}]);
  const [active, setActive] = useState(0);
  const [pending, setPending] = useState(0);
  const [neu, setNeu] = useState(0);
  const [latest, setLatest] = useState('');
  const [removeEmail, setRemoveEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({});
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  useEffect(() => {
    setProfile(storeProfile);
  }, [profile]);
  useEffect(() => {
    if (Object.keys(profile).length !== 0) featchLeads();
  }, [profile]);
  const featchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://127.0.0.1:8443/leads?org_id=${profile.org_id}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
        return;
      }
      setLeads(resdata.data.leads);
      setPendingLeads(resdata.data.pending);
      setDiscardedleads(resdata.data.discarded_leads);
      setActive(resdata.data.leads.length);
      setPending(resdata.data.pending.length);
      setNeu(numOfLeadsThisWeek(resdata.data.pending));
      if (resdata.data.pending.length != 0) {
        const ord = orderLeads(resdata.data.pending);
        const first = ord[0];
        setLatest(first?.created || '');
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const numOfLeadsThisWeek = (leads: Lead[]) => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    let count = 0;
    for (let lead of leads) {
      if (lead.created) {
        const createdDate = new Date(lead.created);
        if (createdDate >= oneWeekAgo && createdDate <= now) {
          count++;
        }
      }
    }

    return count;
  };
  const orderLeads = (leads: Lead[]) => {
    const now = new Date();
    leads.sort((a, b) => {
      const dateA = a.created ? new Date(a.created).getTime() : 0;
      const dateB = b.created ? new Date(b.created).getTime() : 0;
      return dateB - dateA;
    });
    return leads;
  };

  const discard = async (leadID: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://127.0.0.1:8443/leads/${leadID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'discard',
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
        return;
      }
      await featchLeads();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const accept = async (leadID: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://127.0.0.1:8443/leads/${leadID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'accept',
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resdata = await response.json();
      if (resdata.success == false) {
        console.log(`${resdata.error}`);
        return;
      }
      await featchLeads();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 max-w-7xl mx-auto">
      {/* Main Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light mb-2"> Leads</h1>
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
          <span className="text-5xl font-light">{active}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            +2 This Month
          </span>
        </div>
        <div className="text-center border-x border-border">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Pending Leads
          </span>
          <span className="text-5xl font-light">{pending}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            3 Requiring Attention
          </span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            New
          </span>
          <span className="text-5xl font-light">{neu}</span>
          <span className="block text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
            Latest: {latest}
          </span>
        </div>
      </div>

      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Pending Leads
          </h2>
          <div className="flex gap-16 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="w-24">Area of Law</span>
            <span className="w-24">Status</span>
            <span className="w-24 text-right">Date</span>
          </div>
        </div>

        <div className="space-y-12">
          {Object.keys(pendingLead).length >= 0
            ? pendingLead.map((item) => (
                <LeadDialog lead={item} accept={accept} discard={discard} />
              ))
            : null}
        </div>
      </div>
      <Separator />
      {/* Case List Section */}
      <div className="mb-24 mt-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
            Accepted Leads
          </h2>
          <div className="flex gap-16 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="w-24">Area of Law</span>
            <span className="w-24">Status</span>
            <span className="w-24 text-right">Date</span>
          </div>
        </div>

        <div className="space-y-12">
          {Object.keys(lead).length >= 0
            ? lead.map((item) => (
                <LeadDialog lead={item} accept={accept} discard={discard} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
