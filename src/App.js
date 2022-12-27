import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Diaries from "./components/Diaries";
import Auth from "./components/Auth";
import Add from "./components/Add";
import Profile from "./components/Profile";
import DairyUpdate from "./components/DairyUpdate";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";
function App() {
  const { isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  let userId = localStorage.getItem("userId");
  useEffect(() => {
    try {
      if (userId) {
        dispatch(authActions.login());
      }
    } catch (error) {
      console.log('Error ', error)
    }
  }, [userId]);
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn ? (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<DairyUpdate />} />
            </>
          ) : null}
        </Routes>
      </section>
    </div>
  );
}

export default App;
