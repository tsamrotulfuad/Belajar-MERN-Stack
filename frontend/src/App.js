import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={ <UserList /> }/>
          <Route path="/add" element={ <AddUser /> }/>
          <Route path="/edit/:id" element={ <EditUser /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
