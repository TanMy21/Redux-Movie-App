import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { BiCameraMovie } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            {/* <div className="tab">Movies</div>
            <div className="tab">Favourites</div> */}
            <div class="tab-2">
              <label for="tab2-1"><BiCameraMovie id='icons'/>Movies</label>
              <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />      
            </div>
            <div class="tab-2">
                <label for="tab2-2"><FiHeart id='icons'/>Favourites</label>
                <input id="tab2-2" name="tabs-two" type="radio" />              
            </div>
          </div>
          <div className="list">
            {
              data.map(movie => {
                return(<MovieCard movie={ movie } />)
              })
            }
          </div>
        </div>
    </div>
  );
}

export default App;
