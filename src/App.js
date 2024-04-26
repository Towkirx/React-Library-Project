import Nav from "./components/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo"

library.add(faBars)

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />}/>
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
