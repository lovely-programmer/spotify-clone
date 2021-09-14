import React from "react";
import Header from "./Header";
import SongRow from "./SongRow"
import { useDataLayerValue } from "./StateProvider";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";

function Body({ spotify }) {
  const [{ discover }] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover?.name}</h2>
          <p>{discover?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icon">
          <PlayCircleFilled className="body_shuffle"/>
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover?.tracks.items.map(item => (
            <SongRow track={item.track} />
        ))}
      </div>

    </div>
  );
}

export default Body;
