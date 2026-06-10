import { create } from 'zustand';

export type Profile = {
  email?: string;
  id?: string;
  name?: string;
  org_id?: string;
  phone?: string;
  role?: 'admin' | 'member' | string;
  status?: 'active' | 'inactive' | string;
};

type ProfileStore = {
  profile: Profile; // Starts as null before data is fetched
  setProfile: (profile: Profile) => void; // Action to set the profile
  clearProfile: () => void; // Action to log out / clear data
};

const useProfileStore = create<ProfileStore>((set) => ({
  profile: localStorage.getItem('profile')
    ? JSON.parse(localStorage.getItem('profile')!)
    : ({} as Profile),

  setProfile: (newProfile) => set({ profile: newProfile }),
  clearProfile: () =>
    set({
      profile: {} as Profile,
    }),
}));

export default useProfileStore;
