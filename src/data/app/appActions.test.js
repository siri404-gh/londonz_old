import {
  SET_CURRENT_SYSTEM_DATE, setCurrentSystemDate,
} from './appActions';

describe('App Actions', () => {
  describe('SET_CURRENT_SYSTEM_DATE', () => {
    it('Should set current system date to given payload', () => {
      expect(setCurrentSystemDate('01/02/03')).toEqual({
        type: SET_CURRENT_SYSTEM_DATE,
        payload: '01/02/03',
      });
    });
  });
});