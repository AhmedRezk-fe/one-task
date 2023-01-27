import axios from "axios"
const URL = "https://youtube.googleapis.com/youtube/v3/";

const Requests = axios.create({
    baseURL:URL,
    params:{
        key:"AIzaSyDaHYDBHiZ6_sqYblyUSbWy9GZgZNsgiFI",
        type: [
          "channel",
          "playlist",
          "video"
        ],
        part:"snippet",
        maxResults:25
    },
    headers: {

    },
})


const requestResult =  (callback , keyword = "js") => {
  const newDate = new Date();

  const todayDate = new Date(), weekDate = new Date();
  const lastWeek = weekDate.setTime(todayDate.getTime()-(7*24*3600000));
  const lastDay = weekDate.setTime(todayDate.getTime()-(1*24*3600000));
  const lastMonth = weekDate.setTime(todayDate.getTime()-(30*24*3600000));

  return async(dispatch)=>{
    const res = await Requests.get("/search", {
      params: {
        q: keyword,
        // order:"date",
        // publishedAfter: new Date(x).toISOString()
      },
    }).catch((err) => {
      console.log(err);
    });
    
    dispatch(callback(res.data.items))
  }
};


// export const requestResultFilter =  (callback , keyword ,option) => {
//   const newDate = new Date();



//   const todayDate = new Date(), weekDate = new Date();
//   const lastWeek = weekDate.setTime(todayDate.getTime()-(7*24*3600000));
//   const lastDay = weekDate.setTime(todayDate.getTime()-(1*24*3600000));
//   const lastMonth = weekDate.setTime(todayDate.getTime()-(30*24*3600000));

//   return async(dispatch)=>{
//     const res = await Requests.get("/search", {
//       params: {
//         q: keyword,
//         // order:"date",
//         // publishedAfter: new Date(x).toISOString()
//       },
//     }).catch((err) => {
//       console.log(err);
//     });
    
//     dispatch(callback(res.data.items))
//   }
// };

  

export default requestResult;

