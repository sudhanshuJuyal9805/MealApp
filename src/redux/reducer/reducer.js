import { ADD_TO_FAVOURITES } from "../action_types";

const initialState={
    favData:[]

}
export default function favouriteItems(state=initialState,action)
{
    switch(action.type)
    {
        case ADD_TO_FAVOURITES:
            return {...state,favData:action.data}

            default:
                return state

    }
}