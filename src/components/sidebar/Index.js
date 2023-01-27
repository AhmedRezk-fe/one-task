import React,{useEffect,useState} from 'react'
import Card from '../card'
import { useSelector  } from "react-redux";
import Loading from '../../helpers/Loading';

const  SideBar = ()=> {

  const cardList = useSelector(state => state.card?.cardItems);
  const [cardAll,SetCardAll] = useState([])
  

  useEffect(()=>{
    if(cardList){
      SetCardAll(cardList)
    }
  },[cardList])

  return (
    <div className="sidebar">
      
      {
        !cardAll.length ? <Loading />:  cardAll?.map((cardItem) => (
           <Card key={cardItem.etag} dataCard={cardItem}/>
        ))
      }
    </div>
  )
}

export default SideBar