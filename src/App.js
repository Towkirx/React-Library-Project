import Nav from "./components/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
