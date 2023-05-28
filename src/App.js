import './App.css';
import Sidebar from './components/Sidebar'
import Channel from './components/Channel'
import MainBody from './components/MainBody';
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
