import './App.css';
import ProjectCard from './Components/Project/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectCard 
          id="_g9ert45"
          name="Google Clone" 
          category="Web Development" 
          state="In Progress" 
          priority="Low" 
          numTaskDone={25}
          numTask={50}
          tags={["Fullstack", "MERN"]}
          dueDate="10 july"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        />
        <ProjectCard 
          id="_g9ert45"
          name="Ephesians 4:11-14" 
          category="Bible Study" 
          state="Completed" 
          priority="High" 
          numTaskDone={10}
          numTask={10}
          tags={["Meditation", "Ministry"]}
          dueDate="Today"
          url="https://lh3.googleusercontent.com/P4k7BJTxaqTR58QymX9vnyjN2PTVs3dQm86-qYxpWDD-w5i6gL1ykizBAsgUA4ix2g"
        />

      </header>
    </div>
  );
}

export default App;
