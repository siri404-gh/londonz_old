import { handleActions, updateProperty } from '../utils/helpers';
import state from '../store/state';
import {
  SET_CURRENT_SYSTEM_DATE,
  SET_APP_IS_LOADING,
  SET_USER_DETAILS,
} from './appActions';

const setCurrentSystemDate = (state, action) => updateProperty([ 'currentSystemDate' ], action.payload, state);
const setAppIsLoading = (state, action) => updateProperty([ 'isLoading' ], action.payload, state);
const setUserDetails = (state, action) => updateProperty([ 'userDetails' ], action.payload, state);

export default handleActions({
  [SET_CURRENT_SYSTEM_DATE]: setCurrentSystemDate,
  [SET_APP_IS_LOADING]: setAppIsLoading,
  [SET_USER_DETAILS]: setUserDetails,
}, state.app);
