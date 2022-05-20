import logo from './logo.svg';
import './App.css';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Project 
            name="Google Clone" 
            category="Web Development" 
            state="Completed" 
            priority="High" 
            numTaskDone={25}
            numTask={50}
            tags={["Fullstack", "MERN"]}
            dueDate="20 June"
            />
      </header>
    </div>
  );
}

export default App;
