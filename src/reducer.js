import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state,action) => {
  switch(action.type){
    case SET_LOADING:
      return{...state,loading:true}
    case SET_STORIES:
      return{
        ...state,
        loading:false,
        list:action.payload.hits,
        nbPage:action.payload.nbPage
      }
    case REMOVE_STORY:
      const newList = state.list.filter(item=>{
        return item.objectID !== action.payload;
      })
      return{
        ...state,
        list:newList
      }
    case HANDLE_SEARCH:
      return{
        ...state,
        query:action.payload,
        page:0
      }
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
