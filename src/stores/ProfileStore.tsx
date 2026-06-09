import { create } from 'zustand';

// 1. Your existing Profile type
export type Profile = {
  email: string;
  id: string;
  name: string;
  org_id: string;
  phone: string;
  role: 'admin' | 'member' | string;
  status: 'active' | 'inactive' | string;
};

type ProfileStore = {
  profile: Profile | null; // Starts as null before data is fetched
  setProfile: (profile: Profile) => void; // Action to set the profile
  clearProfile: () => void; // Action to log out / clear data
};

const useProfileStore = create<ProfileStore>((set) => ({
  // Initial State
  profile: null,

  // Actions
  setProfile: (newProfile) => set({ profile: newProfile }),
  clearProfile: () => set({ profile: null }),
}));

export default useProfileStore;
