import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" deccription="Empty dish"/>
      <Task title="Launday" deadline="tommorw">
      Fold laundry and put away
      </Task>
       
      <Task title="Tidy" deadline="Today"/>
      <Task title="PJC" deadline="Nerver"/>
    </div>
  );
}

export default App;
