import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
      </Routes>
    </>
  );
}

export default App;
