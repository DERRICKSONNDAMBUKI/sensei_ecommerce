import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

function App() {
  console.log(auth);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //  will only run once when the app component loads...

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          console.error(error.message);
        });
    }

    // auth.onAuthStateChange((authUser) => {
    //   console.log("THE USER IS >>> ", authUser);

    //   if (authUser) {
    //     // the suer just logged in/the user was logged in
    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser,
    //     });
    //   } else {
    //     // the user is logged out
    //     dispatch({
    //       type: "SET_USER",
    //       user: null,
    //     });
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/"} exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
