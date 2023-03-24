import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  const access_token = localStorage.getItem("signInToken");

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />}></Route>
        {access_token ? (
          <>
            <Route path="/signup" element={<Navigate to="/todo" />}></Route>
            <Route path="/signin" element={<Navigate to="/todo" />}></Route>
          </>
        ) : (
          <Route path="/signin" element={<SignIn />}></Route>
        )}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
      </Routes>
    </>
  );
}

export default App;
