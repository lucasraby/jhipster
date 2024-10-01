import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '5f263bf5-8490-4724-914a-b092bc1f3aa0',
};

export const sampleWithPartialData: IAuthority = {
  name: '5c90bbb6-111c-4e30-8ec0-b88364786371',
};

export const sampleWithFullData: IAuthority = {
  name: '6c88934d-0451-4a69-8564-578ab586d892',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
