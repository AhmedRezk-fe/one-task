import React,{useState} from 'react';
import "./style.scss";
import FilterIcon from "../../assets/img/filter.png";



const Filter = () => {

    const [showFilter , SetShowFilter] = useState(false)

    const handelFilter =()=>{
        SetShowFilter(!showFilter)
    }

  return (
    <div className="filter">
        <div className="filter_result">
            <span>About 000 filtered results</span>
        </div>
        <div className="filter_option">
            <div className="filter_icon" onClick={handelFilter}>
                <img src={FilterIcon} alt="" />
            </div>
            {
                showFilter && (
                    <>
                        <div className="form-group">
                            <select name="UploadData" >
                                <option value="lastHour">Last hour</option>
                                <option value="Today">Today</option>
                                <option value="ThisWeek">This week</option>
                                <option value="ThisMonth">This month</option>
                                <option value="ThisYear">This year</option>
                            </select>
                            </div>

                            <div className="form-group">
                            <select name="Type" >
                                <option value="Video">Video</option>
                                <option value="Channel">Channel</option>
                                <option value="Playlist">Playlist</option>
                            </select>
                        </div>
                    </>
                ) 
            }

        </div>
    </div>
  )
}

export default Filter