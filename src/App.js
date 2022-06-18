import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Drawer from "./Components/Drawer/Drawer";

function App() {
  return (
    <div className="App">
      <Drawer />  
      <Header />
      <Content />
    </div>
  );
}

export default App;
