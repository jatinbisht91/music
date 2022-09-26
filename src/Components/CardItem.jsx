import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BsFillHeartFill } from "react-icons/bs"
import { v4 as uuid } from 'uuid';
import Banner from './Banner';

const CardItem = ({ topSongs }) => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav") || "[]"))

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav));
    }, [fav])

    const addToFav = (favs, image) => {
        let present = JSON.parse(localStorage.getItem("fav")).filter((item) => {
            return item.title === favs
        })
       
        if (!(present.length === 0)) {
            alert("Already Added To Favourite List")
            return
        } else {
            setFav(prev => [...prev, { title: favs, img: image, id: uuid() }]);
            alert("SUCCESSFULLY ADDED TO THE PLAYLIST..")
        }
   }

    return (
        
            <div className="container-fluid">
               <Banner>
                <h1>HOME</h1>
               </Banner>
                <Row className="d-flex justify-content-center">  
                    {topSongs.map((item, index) => {
                    return <Card className="col-sm-12 col-md-4 col-lg-3 m-3  cardHover position-relative overflow-hidden" key={index}>
                        <Card.Img variant="top" src={item.images.coverart} />
                        <Card.Body>
                            <Card.Title className="text-center">{item.title}</Card.Title>
                        </Card.Body>
                        <div className="overlay fs-1"><BsFillHeartFill className="icon" onClick={() => addToFav(`${item.title}`, `${item.images.coverart}`)} /></div>
                    </Card>
                })}
                </Row>
            </div>
        
    )
}

export default CardItem