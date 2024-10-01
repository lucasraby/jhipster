import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32548,
  login: 'JH',
};

export const sampleWithPartialData: IUser = {
  id: 14603,
  login: '05aF@',
};

export const sampleWithFullData: IUser = {
  id: 27129,
  login: 'e',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
