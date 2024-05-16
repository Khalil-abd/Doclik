import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 8100,
  login: '26@gkeX3\\(UyK\\/F-1S8',
};

export const sampleWithPartialData: IUser = {
  id: 2625,
  login: 'Z|!H@RQ\\4fO9N-\\VGtkh1N',
};

export const sampleWithFullData: IUser = {
  id: 4786,
  login: 's&q9@oph-\\ZsEN\\JThtj',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
