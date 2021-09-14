import React,{useEffect} from "react";
import './SongRow.css'
import { useDataLayerValue } from "./StateProvider";

function SongRow({ track }) {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useDataLayerValue()
    let trackImage = track.album.images[0].url
    let trackName = track.name
    let albumName = track.album.name

    useEffect(()=>{
        dispatch({
            type: "ALBUM_IMAGE",
            album: {trackImage, trackName, albumName},
        })
    },[dispatch, trackImage, trackName, albumName])

  return (
    <div className="songRow">
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
