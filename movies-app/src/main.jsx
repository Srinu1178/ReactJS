
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ViewDetails  from './ViewDetails.jsx'
createRoot(document.getElementById('root')).render(
   <>
 
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/view/:imdbID' element={<ViewDetails/>}/>
       </Routes>
    </BrowserRouter>
    </>
     
)
