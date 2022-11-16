import create from 'zustand';
import { IUser } from '~/types/auth';

interface IUserStore {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: IUser | null) => set(() => ({ currentUser: user })),
}));
