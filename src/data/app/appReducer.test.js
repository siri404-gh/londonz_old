import appReducer from './appReducer';
import state from '../store/state';
import { updateProperty } from '../utils/helpers';
import {
  SET_CURRENT_SYSTEM_DATE,
} from './appActions';

describe('App reducer', () => {
  describe('Set current system date', () => {
    it('Should set the current system date', () => {
      const result = appReducer(state.app, { type: SET_CURRENT_SYSTEM_DATE, payload: '01-12-2016' });
      expect(result).toEqual(updateProperty(['currentSystemDate'], '01-12-2016', state.app));
    });
  });
});