import axios from 'axios';

export const serverDateService = () => new Date();

export const cryptService = () => axios.post('/crypt');

export const leaderboardService = () => axios.get('/leaderboard');