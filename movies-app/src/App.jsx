import axios from 'axios';
import {useState} from 'react'
const App = () => {

const [searchWord,setSearchWord] = useState("");
const [moviesData,setMoviesData] =  useState([]);
const searchMovies = async ()=>{
  try{
  let apiPath = `http://www.omdbapi.com/?i=tt3896198&apikey=679b45eb&s=${searchWord}`;
  console.log(apiPath)
  let apiResponse = await axios.get(apiPath);
  console.log(apiResponse);
  setMoviesData([...apiResponse.data.Search]);
  } catch(err){
    alert("Unable to Process Request");
  }
}
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h3>MovieSearch Demo</h3>
          <div className="card mt-4">
            <div className="card-body">
              <div>
                <input type="text" onChange={(e)=>(setSearchWord(e.target.value))} className="form-control" placeholder="Search movies, series"/>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary" onClick={(e)=>(searchMovies() )}>Search</button>
               
              </div>
            </div>
          </div>
          {/* Results */}

          {moviesData.map((movie)=>(
            <div className='card mt-3 border-0 shadow-sm'>
              <div className='row gap-0'>
                <div className='col-md-2'>
                   <img src={movie.Poster} className='img-fluid rounded-start'/>
                </div>
                <div className='col-md-10'>
                  <a href={'view/'+movie.imdbID} target='_blank'>{movie.Title}</a>
                  <div>Year: {movie.Year}</div>
                  <div>Type: {movie.Type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App