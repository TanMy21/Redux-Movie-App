import React, {useState} from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { BiCameraMovie } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';

function App() {

  const [checked, setChecked] = useState(true);

  return (
    <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            {/* <div className="tab">Movies</div>
            <div className="tab">Favourites</div> */}
            <div className="tab-2">
              <label htmlFor="tab2-1"><BiCameraMovie id='icons'/>Movies</label>
              <input id="tab2-1" name="tabs-two" type="radio" checked={checked} onChange={() => setChecked(!checked)} />      
            </div>
            <div className="tab-2">
                <label htmlFor="tab2-2"><FiHeart id='icons'/>Favourites</label>
                <input id="tab2-2" name="tabs-two" type="radio" />              
            </div>
          </div>
          <div className="list">
            {
              data.map((movie, index) => {
                return(<MovieCard movie={ movie } key={ `movies-${index}` }/>)
              })
            }
          </div>
        </div>
    </div>
  );
}

export default App;
