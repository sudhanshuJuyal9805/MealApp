import { ADD_TO_FAVOURITES } from "./action_types"
import { REMOVE_FROM_BOOKMARK_LIST } from "./action_types"
export const addToFavoutites=(data)=>{

    return {
       type:ADD_TO_FAVOURITES,
       data:data
    }
}
export const removeFromBookmark =(data)=>{

    return {
        type:REMOVE_FROM_BOOKMARK_LIST,
        data:data
    }
}