import { Localstorage } from 'data/storage';
import type { Profile } from 'lens';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  profiles: Profile[] | [];
  setProfiles: (profiles: Profile[]) => void;
  currentProfile: Profile | null;
  setCurrentProfile: (currentProfile: Profile | null) => void;
  userSigNonce: number;
  setUserSigNonce: (userSigNonce: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  profiles: [],
  setProfiles: (profiles) => set(() => ({ profiles })),
  currentProfile: null,
  setCurrentProfile: (currentProfile) => set(() => ({ currentProfile })),
  userSigNonce: 0,
  setUserSigNonce: (userSigNonce) => set(() => ({ userSigNonce }))
}));

interface AppPersistState {
  profileId: string | null;
  setProfileId: (profileId: string | null) => void;
  staffMode: boolean;
  setStaffMode: (staffMode: boolean) => void;
  modMode: boolean;
  setModMode: (modMode: boolean) => void;
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      profileId: null,
      setProfileId: (profileId) => set(() => ({ profileId })),
      staffMode: false,
      setStaffMode: (staffMode) => set(() => ({ staffMode })),
      modMode: false,
      setModMode: (modMode) => set(() => ({ modMode }))
    }),
    { name: Localstorage.LensterStore }
  )
);
