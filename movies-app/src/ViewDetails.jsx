import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';

function ViewDetails() {
    const {imdbID} = useParams()
    const [data,setData] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
        
             let apiPath = `http://www.omdbapi.com/?apikey=679b45eb&i=${imdbID}`
            console.log(apiPath)
            let apiResponse = await axios.get(apiPath);
            console.log(apiResponse)
            setData({...apiResponse.data})
        }
       getData()
    },[])
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            {
                data != null &&
                <div className='row'>
                    <div className="col-md-4">
                        <img src={data.Poster} alt="" className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-4">
                        <h2>{data.Title} {data.Year}</h2>
                        <p><strong>Genre:</strong>{data.Genre}</p>
                        <p><strong>Writer:</strong>{data.Writer}</p>
                        <p><strong>Actors:</strong>{data.Actors}</p>
                        <p><strong>Awards:</strong>{data.Awards}</p>
                        <p><strong>IMDB Rating:</strong>{data.imdbRating}</p>
                    
                    </div>
                </div>
            }
        </div>
    </div>
  ) 
}
export default ViewDetails
