import { handleActions, updateProperty } from '../utils/helpers';
import state from '../store/state';
import {
  SET_CURRENT_SYSTEM_DATE,
} from './appActions';

const setCurrentSystemDate = (state, action) => updateProperty(['currentSystemDate'], action.payload, state);

export default handleActions({
  [SET_CURRENT_SYSTEM_DATE]: setCurrentSystemDate,
}, state.app);
