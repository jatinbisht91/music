import React from 'react'

import Loading from "../Components/Loading";
import CardItem from '../Components/CardItem';
import { useContext } from 'react';
import SongsContext from "../Context/SongContext";

function Home() {
    const { loading, topSongs } = useContext(SongsContext);

    return (
        <>
        
        <div className=" d-flex justify-content-center col-10 bg">
        {loading ? <Loading /> : <CardItem topSongs={topSongs} />}
        </div>
    </>
    )
}

export default Home