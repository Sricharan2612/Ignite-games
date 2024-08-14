import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";
import { type } from "@testing-library/user-event/dist/type";

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL"
    });
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        }
    });
};