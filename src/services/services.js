import axios from 'axios';

export const serverDateService = () => new Date();

export const cryptService = () => axios.get('/crypt');

export const leaderboardService = () => 'Leaderboard';