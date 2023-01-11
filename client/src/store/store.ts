import create from 'zustand';
import { IUser } from '~/types/auth';

interface IUserStore {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}

interface IToggleModal {
  modalOpenList: string[];
  handleOpenModal: (modalType: string) => void;
  handleCloseModal: (modalType: string) => void;
}

interface IFollowStore {
  followers: string[];
  followings: string[];
  handleSetFollow: (followers: string[], followings: string[]) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: IUser | null) => set(() => ({ currentUser: user })),
}));

export const ModalType = {
  POST_CREATOR: 'POST_CREATOR',
  POST_COMMENT: 'POST_COMMENT',
  FOLLOWERS_USER: 'FOLLOWERS_USER',
  FOLLOWINGS_USER: 'FOLLOWINGS_USER',
} as const;

export const useToggleModal = create<IToggleModal>((set) => ({
  modalOpenList: [],
  handleOpenModal: (modalType: string) =>
    set((state) => ({ modalOpenList: [...state.modalOpenList, modalType] })),
  handleCloseModal: (modalType: string) =>
    set((state) => ({ modalOpenList: state.modalOpenList.filter((type) => type !== modalType) })),
}));

export const useFollowStore = create<IFollowStore>((set) => ({
  followers: [],
  followings: [],
  handleSetFollow: (followers: string[], followings: string[]) =>
    set(() => ({ followers, followings })),
}));
