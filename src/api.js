const base_url = 'https://api.rawg.io/api/';


// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;



export const popularGamesURL = () => `${base_url}${popular_games}&key=${process.env.REACT_APP_API_KEY}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&key=${process.env.REACT_APP_API_KEY}`;
export const newGamesURL = () => `${base_url}${new_games}&key=${process.env.REACT_APP_API_KEY}`;


// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
// Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

//Search games
export const searchGamesURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${process.env.REACT_APP_API_KEY}`