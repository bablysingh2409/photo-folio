import './App.css';
import logo from './picture.png';
// import AlbumList from './component/AlbumList/AlbumList';
import AlbumList from './component/albumList/AlbumList';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo-container">
          <img src={logo} alt="logoNotVisible" className="nav-logo" />
          <h1 className="nav-head">PhotoFolio</h1>
        </div>
      </nav>
      <AlbumList />
    </>
  );
}

export default App;
