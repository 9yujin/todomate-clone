import { atom, selector, selectorFamily } from 'recoil';
import { IFriend } from '../interfaces/IFriend';

const initialState: IFriend[] = [
  {
    userId: 'user1',
    name: '🐬규진',
    profileImage: '',
    statusMessage: '어쩌다 갓생',
  },
  {
    userId: 'user2',
    name: '유진',
    profileImage: 'https://i.ibb.co/MgmDcz1/1021805078815985664.webp',
    statusMessage: '주니어 PM이 되기 위한 노력',
  },
  {
    userId: 'user3',
    name: '찬진',
    profileImage:
      'https://i.ibb.co/dmxdSrf/88cc8c7be1594a83bbf7e39dbf21d5de.webp',
    statusMessage: '나는 치타다',
  },
  {
    userId: 'user4',
    name: '수진',
    profileImage: '',
    statusMessage: '수진이 투두메이트 안하니',
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
