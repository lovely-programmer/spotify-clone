import React from "react";
import SidebarOptions from "./SidebarOptions";
import { Home, Search, LibraryMusic, AddBoxSharp, Favorite} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useDataLayerValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists}] = useDataLayerValue();
  
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="../spotify_logo.jpg" alt="" />
      <SidebarOptions Icon={Home} title="Home" />
      <SidebarOptions Icon={Search} title="Search" />
      <SidebarOptions Icon={LibraryMusic} title="Library" />

      <br />
      <SidebarOptions Icon={AddBoxSharp} title="Create Playlist" />

      <div className='sidebar_fav'>
        <IconButton fontSize="small">
          <Favorite/>
        </IconButton>
        <h4>Liked Songs</h4>
      </div>

      <br />

      <strong className="sidebar_playlist">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
          <SidebarOptions title={playlist.name}/>
      ))}

    </div>
  );
}

export default Sidebar;
