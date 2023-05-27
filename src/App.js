import './App.css';
import Sidebar from './Sidebar'
import Channel from './Channel'
import MainBody from './MainBody';
function App() {
  return (
    <div className="flex flex-row">
        <Sidebar/>
        <Channel/>
        <MainBody/>
    </div>
  );
}

export default App;
