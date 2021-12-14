import { SHOW_PUBLISHED, SHOW_ALL } from "../types"

export const showPublished = () => {
    return {
        type: SHOW_PUBLISHED
    }
}

export const showAllProducts = () => {
    return {
        type: SHOW_ALL
    }
}