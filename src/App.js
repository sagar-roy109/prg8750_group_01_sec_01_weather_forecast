
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BlogList from './components/BlogList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
		 <BlogList></BlogList>

    </div>
  );
}

export default App;
