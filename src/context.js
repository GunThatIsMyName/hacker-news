import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  loading:true,
  list:[],
  query:'',
  page:0,
  nbPage:0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  console.log(state,"state!")
  const fetchNews = async(url)=>{
    dispatch({type:SET_LOADING})
    try {
      const response = await fetch(url)
      const data = await response.json();
      dispatch({type:SET_STORIES,payload:{hits:data.hits,nbPage:data.nbPages}})
    } catch{
      console.log("ERROR")
    }
  }

  const removeStory = (id)=>{
    dispatch({type:REMOVE_STORY,payload:id})
  }
  const handleSearch = (query)=>{
    console.log(query,"in query search term")
    dispatch({type:HANDLE_SEARCH,payload:query})
  }
  useEffect(()=>{
    fetchNews(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  },[state.query])
  return <AppContext.Provider value={{...state,removeStory,handleSearch}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
