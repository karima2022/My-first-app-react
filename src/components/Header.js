import logo from '../img/note_13650723.png';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className='App-logo' />
      <style>{`p { color: blue; font-weight: bold; }`}</style>
      <p>Bienvenue sur ta ToDo-List!</p>
    </header>
  );
}

export default Header;
