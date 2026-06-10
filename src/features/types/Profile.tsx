export type Profile = {
  email?: string;
  id?: string;
  name?: string;
  org_id?: string;
  phone?: string;
  role?: 'admin' | 'member' | string;
  status?: 'active' | 'inactive' | string;
};
