export type Lead = {
  email?: string;
  name?: string;
  id?: string;
  lang?: string;
  summary?: string;
  issue?: string;
  phone?: string;
  date?: string;
  area?: string;
  urgency?: 'immediate' | 'time' | 'wait' | string; //Urgency dictates how fast an intake specialist needs to move before the lead signs with a competitor or a legal deadline passes.
  quality?: 'good' | 'ok' | 'bad' | string; //Case quality rates how well the lead aligns with the firm’s ideal client profile and the potential financial/precedent value of the case.
  conflict?: 'clear' | 'review' | 'conflict' | string; //A conflict check is a strict legal requirement. The system must clearly show whether a conflict check has been performed and what the result was.
  retention?: 'high' | 'medium' | 'low' | string; //This estimates the probability that the lead will actually sign a contract (Retainer Agreement) with the firm.
  status?: 'pending' | 'new' | 'accepted' | 'discarded' | string;
};
