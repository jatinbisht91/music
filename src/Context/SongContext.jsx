import { createContext, useState, useEffect } from 'react';
import axios from "axios";

const SongsContext = createContext();
export const SongContext = ({ children }) => {
    const [topSongs, setTopsongs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const res = await axios.get("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks", {
            params: { id: '40008598', locale: 'en-US' },
            headers: {
                'X-RapidAPI-Key': '7fc04b52ddmsh93bcdba88a76bcfp1d85eejsnae9838c32d47',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        })
        const { data } = await res;
        console.log(data.tracks)
        setTopsongs(data.tracks)
        setLoading(false)
    }
    useEffect(() => { fetchData() }, [])
    return (
        <SongsContext.Provider value={{ loading, topSongs, setTopsongs }}>
            {children}
        </SongsContext.Provider>
    )
}

export default SongsContext