import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGamesURL } from "../api";
import { type } from "@testing-library/user-event/dist/type";

// Action Creator
export const loadGames = () => async (dispatch) => {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    });
};
//Searching game data
export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedGame = await axios.get(searchGamesURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGame.data.results,
        }
    });
};