//import { Route } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import {  Routes, Route } from "react-router-dom";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
        <Routes>
          <Route path='/'>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Routes>
     
    </div>
  );
}

export default App;
