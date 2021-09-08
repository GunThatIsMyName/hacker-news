import React, { useRef } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {handleSearch} = useGlobalContext();
  const inputRef = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const search= inputRef.current.value
    handleSearch(search);
    inputRef.current.value ='';
  }
  return <form onSubmit={handleSubmit} className="search-form">
    <h2>search hacekr news</h2>
    <input ref={inputRef} type="text" className="form-input" />
  </form>
}

export default SearchForm
