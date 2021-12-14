import { GET_DATE } from "../types"

export const getDateAction = (date) => {
    return {
        type: GET_DATE,
        payload: date
    }
}