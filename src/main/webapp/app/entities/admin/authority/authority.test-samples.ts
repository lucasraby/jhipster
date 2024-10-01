import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b22db2ef-03ea-4bbe-9e23-feaccc3ced5e',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a630d557-315b-4905-80c9-137e113ee252',
};

export const sampleWithFullData: IAuthority = {
  name: '7a85dbfa-8520-4802-8ca4-d78701311f8c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
