import React , { useState} from 'react';
import Button from '../../helpers/Button';
import Input from '../../helpers/Input';
import requestResult from "../../shares/agent";
import { useDispatch } from 'react-redux';
import {startApp} from "../../Redux/action"
import { useNavigate  } from "react-router-dom";



const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [valInput , setValInput] = useState("")

 const keywordSearch = (e) => {
    setValInput(e.target.value)
 }

 const submitSearch = (e)=>{
  e.preventDefault()
  dispatch(requestResult(startApp , valInput))
  navigate(`search?query=${valInput}`)
 }

  return (
    <div className="searchbar">
      <form onSubmit={submitSearch}>
        <div className="searchbar_input">
          <Input classN="search_inp" placeholder="search" Change={keywordSearch} />
        </div>
        <div className="searchbar_button">
          <Button classN="searchbtn" type="submit" name="searchbtn"/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar