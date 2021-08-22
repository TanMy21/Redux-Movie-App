import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { addMovies } from '../actions';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: true,
    };
  }

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log('STATE ',this.props.store.getState());
  }

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

  render() {
    const { list } = this.props.store.getState();
    // const [checked, setChecked] = useState(true);

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            {/* <div className="tab">Movies</div>
              <div className="tab">Favourites</div> */}
            <div className="tab-2">
              <label htmlFor="tab2-1">
                <BiCameraMovie id="icons" />
                Movies
              </label>
              <input
                id="tab2-1"
                name="tabs-two"
                type="radio"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className="tab-2">
              <label htmlFor="tab2-2">
                <FiHeart id="icons" />
                Favourites
              </label>
              <input id="tab2-2" name="tabs-two" type="radio" />
            </div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
