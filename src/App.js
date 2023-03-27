import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";
import { PublicRoute, PrivateRoute } from "./router/Router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todo" />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <ToDo />
          </PrivateRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
