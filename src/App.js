import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Hello world

      <div>
        <Button color={'red'}name={'first'}>
          <span>Button First</span>
        </Button>
        <Button name={'second'} ></Button>
        <Button name="third"></Button>
        <Button name='fourth'></Button>
      </div>
    </div>
  );
}

export default App;
