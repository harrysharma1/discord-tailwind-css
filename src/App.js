import './App.css';
import Sidebar from './Sidebar'
import Channel from './Channel'
function App() {
  return (
    <div className="flex flex-row">
        <Sidebar/>
        <Channel/>
    </div>
  );
}

export default App;
