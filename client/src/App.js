import './App.css';
import ProjectCard from './Components/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectCard 
          id="_g9ert45"
          name="Google Clone" 
          category="Web Development" 
          state="Completed" 
          priority="Mid" 
          numTaskDone={25}
          numTask={50}
          tags={["Fullstack", "MERN"]}
          dueDate="10 july"
        />
        <ProjectCard 
          id="_g9ert45"
          name="Ephesians 4:11-14" 
          category="Bible Study" 
          state="In Progress" 
          priority="High" 
          numTaskDone={2}
          numTask={10}
          tags={["Meditation", "Ministry"]}
          dueDate="Today"
        />

      </header>
    </div>
  );
}

export default App;
