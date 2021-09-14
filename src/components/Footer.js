import React from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";

import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./StateProvider";

function Footer() {
  const [{ album }] = useDataLayerValue();

  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src={album?.trackImage} alt="" />
        <div className="footer_songInfo">
          <h4>{album?.trackName}</h4>
          <p>{album?.albumName}</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
