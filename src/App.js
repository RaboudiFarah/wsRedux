import AddTasks from './component/AddTasks';
import ListTasks from './component/ListTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Ws Redux</h1>
    
<AddTasks/>
<ListTasks/>
    </div>
  );
}

export default App;
