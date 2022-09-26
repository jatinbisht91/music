import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import SongsContext from "../Context/SongContext";
import Banner from '../Components/Banner';
const Playlist = () => {
  const { id } = useParams();
  const [playlist, setPlayList] = useState(JSON.parse(localStorage.getItem("allPlayList") || "[]"))
  const { topSongs } = useContext(SongsContext);

  let filter = playlist.filter((list) => list.id === id);
  let selectedPlayList = Array.from(new Set(filter.map(i => i.list.title)))

  useEffect(() => {
    localStorage.setItem("allPlayList", JSON.stringify(playlist));
   }, [playlist, id])

  const addToPlaylist = (added, id) => {
    console.log(id)
    let addition = topSongs.find((item) => item.title === added);
    setPlayList((prev) => [...prev, { "id": id, "list": addition }]);
    console.log(playlist)
  }


  return (
    <div className="container-fluid col-10 bg fontFamily">
      <Banner>{id}</Banner>
      <div className="my-2 h-20">
        <h1 className='text-center' style={{ color: "green" }}>Songs Added to playlist</h1>
        {selectedPlayList.reverse().map((playlist, i) => {
          return <div className='fav-row border-bottom border-primary  my-2  w-100 mx-auto playlistHover playlistCard d-flex justify-content-center my-2' style={{ color: "green" }} key={i}>
            <span className="col-4 d-flex justify-content-center align-items-center">{playlist}</span>
          </div>
        })}
      </div>

      <div>
        <h1 className='text-center'>Recommended Songs</h1>
        {topSongs.map((playlist, i) => {
          return <div className='fav-row border-bottom border-primary  my-2  w-100 mx-auto playlistHover playlistCard d-flex justify-content-center' key={i}>
            <span className='col-4 h-100'><img src={playlist.images.coverart} className="h-100 py-2  " alt="cover" style={{ objectFit: "cover" }} /></span>
            <span className="col-4 d-flex justify-content-center align-items-center">{playlist.title}</span>
            <span className="col-4 d-flex justify-content-center align-items-center" onClick={() => { addToPlaylist(playlist.title, id) }}>ADD</span>
          </div>
        })}
      </div>
    </div>


  )
}

export default Playlist