import Menu from './views/lateralMenu/Menu'
import PanelInfo from './views/panelInfo/PanelInfo';
function App() {
  return (
    <div className="grid">
      <div className="menu">
        <Menu/>
      </div>
      <div className="page">
        <PanelInfo/>
      </div>
    </div>
  );
}

export default App;
