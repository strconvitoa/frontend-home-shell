export type Lead = {
  email?: string; //Leads Email
  name?: string; //leads Name
  id?: string; //Lead ID
  lang?: string; //language use speaks
  summary?: string; // Generate IRAC brief of the user created Description
  description?: string; //User created description of what happen
  issue?: string; //the core legal issue. "Negligance"
  phone?: string; //phone number of lead
  created?: string; // date of when created
  area?: string; //Area of law
  urgency?: 'immediate' | 'time' | 'wait' | string; //Urgency dictates how fast an intake specialist needs to move before the lead signs with a competitor or a legal deadline passes.
  quality?: 'good' | 'ok' | 'bad' | string; //Case quality rates how well the lead aligns with the firm’s ideal client profile and the potential financial/precedent value of the case.
  conflict?: 'clear' | 'review' | 'conflict' | string; //A conflict check is a strict legal requirement. The system must clearly show whether a conflict check has been performed and what the result was.
  retention?: 'high' | 'medium' | 'low' | string; //This estimates the probability that the lead will actually sign a contract (Retainer Agreement) with the firm.
  status?: 'pending' | 'accept' | 'discard' | string;
};
