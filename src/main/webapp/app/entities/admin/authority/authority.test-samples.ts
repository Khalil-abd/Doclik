import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '969bfc6c-8127-470c-bf19-6cc7f23a3188',
};

export const sampleWithPartialData: IAuthority = {
  name: '0696c751-e6b9-44d7-9ffa-75360500853b',
};

export const sampleWithFullData: IAuthority = {
  name: '1146fcf6-eb3b-4c0f-9292-5012d1076ce2',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
