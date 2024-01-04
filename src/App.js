import './App.css';
import MovieList from './components/MovieList';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App" id="pageTitle">
      <h1 className='display-6 fw-bold' id="header">2023 Blockbuster Movie Review App</h1>
      <p>There were many highly anticipated movie releases in 2023, six of which are listed below. To review movie details and submit a review simply click the movie title.</p>
      <MovieList />
    </div>
  );
}

export default App;
