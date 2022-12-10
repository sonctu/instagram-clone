import create from 'zustand';
import { IUser } from '~/types/auth';

interface IUserStore {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}

interface IToggleModal {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}
export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: IUser | null) => set(() => ({ currentUser: user })),
}));

const ModalType = {
  POST_CREATOR: 'POST_CREATOR',
  POST_COMMENT: 'POST_COMMENT',
} as const;

export const useToggleModal = create<IToggleModal>((set) => ({
  openModal: false,
  handleOpenModal: () => set(() => ({ openModal: true })),
  handleCloseModal: () => set(() => ({ openModal: false })),
}));
