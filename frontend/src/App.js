import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <h1 >Enter your zip code for today's forecast</h1>
      <input
        type="text"
        // value={this.state.value} Need to create a state object to hold this value
        // onChange={this.handleChange} Need to create a function to handle this change.
      />
      {/* <button >Hello</button> */}
    </div>
  );
}

export default App;
