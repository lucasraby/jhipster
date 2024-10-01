import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 7662,
  login: 'J?zix@9DHn\\hl8k\\lO7PRq',
};

export const sampleWithPartialData: IUser = {
  id: 32386,
  login: 'A@ifph\\JTF2',
};

export const sampleWithFullData: IUser = {
  id: 9051,
  login: 'DOuBu',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
