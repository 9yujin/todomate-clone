import { atom, selector, selectorFamily } from 'recoil';
import { IFriend } from '../interfaces/IFriend';

const initialState: IFriend[] = [
  {
    userId: 'user1',
    name: 'π¬κ·μ§',
    profileImage: '',
    statusMessage: 'μ΄μ©λ€ κ°μ',
  },
  {
    userId: 'user2',
    name: 'μ μ§',
    profileImage: 'https://i.ibb.co/MgmDcz1/1021805078815985664.webp',
    statusMessage: 'μ£Όλμ΄ PMμ΄ λκΈ° μν λΈλ ₯',
  },
  {
    userId: 'user3',
    name: 'μ°¬μ§',
    profileImage:
      'https://i.ibb.co/dmxdSrf/88cc8c7be1594a83bbf7e39dbf21d5de.webp',
    statusMessage: 'λλ μΉνλ€',
  },
  {
    userId: 'user4',
    name: 'μμ§',
    profileImage: '',
    statusMessage: 'μμ§μ΄ ν¬λλ©μ΄νΈ μνλ',
  },
];

export const friendsState = atom<IFriend[]>({
  key: 'friends',
  default: initialState,
});

export const selectUserById = selectorFamily<IFriend[], string>({
  key: 'selectUserById',
  get:
    (userId: string) =>
    ({ get }) =>
      get(friendsState).filter((friend) => friend.userId === userId),
});
