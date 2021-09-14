import React from "react";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./StateProvider";

function Header() {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcast"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
