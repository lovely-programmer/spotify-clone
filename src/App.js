import { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from "./components/spotify";
import "./components/style.css";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./components/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZF1DWYcDQ1hSjOpY').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover: response,
        })
      })
    }
  }, [dispatch]);

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
