import logo from '../src/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Your name here</h1>
        <div className="imgg">
          <img src={logo} style={{ width: " 400px ", height: "300px" }} />
          <img
            src="/One piece.jpg"
            style={{ width: " 400px ", height: "300px" }}/>
          </div>
      </div>
      <video width={320} height={240} controls>
        <source src="Logo A.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
