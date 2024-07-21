import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          rel="noopener noreferrer"
          onClick={() => {
            Notification.requestPermission().then(function (permission) {

              console.log(permission);
          
          });
          }}
        >
          Allow Notif
        </button>
      </header>
    </div>
  );
}

export default App;
