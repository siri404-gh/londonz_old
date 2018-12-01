import { createAction } from '../utils/helpers';
import { cryptService, leaderboardService, checkAnswerService } from '../../services/services';

export const SET_CURRENT_SYSTEM_DATE = 'APP::CURRENT_SYSTEM_DATE';
export const SET_APP_IS_LOADING = 'APP::IS_LOADING';
export const SET_USER_DETAILS = 'APP:USER_DETAILS';

export const setCurrentSystemDate = createAction(SET_CURRENT_SYSTEM_DATE);
export const setAppIsLoading = createAction(SET_APP_IS_LOADING);
export const setUserDetails = createAction(SET_USER_DETAILS);

export const getCrypt = () => async (dispatch, getState) => {
  dispatch(setAppIsLoading(true));
  try {
    const crypt = await cryptService();
    console.log(crypt);
    dispatch(setAppIsLoading(false));
  } catch (e) {
    console.log(e);
  }
};

export const getLeaderboard = () => async (dispatch, getState) => {
  try {
    const Leaderboard = await leaderboardService();
  } catch(e) {
    console.log(e);
  }
}