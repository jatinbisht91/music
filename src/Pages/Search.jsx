import React, { useState } from 'react'
import { useContext } from 'react';
import SongsContext from "../Context/SongContext";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from '../Components/Banner';


function Search() {
  const { topSongs } = useContext(SongsContext);
  const [search, setSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);


  const filtered = topSongs.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()) })


  const onChangeHandler = (e) => {

    setSearch(e.target.value)

    if (e.target.value === "") {
      setSearchShow(false)
    } else {
      setSearchShow(true)
    }
  }
  const searchList = () => {
    if (searchShow) {
      return (<Container>
        <Row className="d-flex justify-content-center py-3 ">
          {filtered.map((item, index) => {
            return <Card className="col col-sm-12 col-md-4 col-lg-3 m-3 cardHover position-relative overflow-hidden" key={index}>
              <Card.Img variant="top" src={item.images.coverart} />
              <Card.Body>
                <Card.Title className="text-center">{item.title}</Card.Title>
              </Card.Body>

            </Card>
          })}
        </Row>

      </Container>)
    }
  }


  return (

    <div className="container col-10 bg ">
      <Banner><h1>SEARCH</h1></Banner>
      <div className="input-group m-4 mx-auto">
        <input type="text" className="form-control " placeholder="Search your Songs by title..." onChange={onChangeHandler} value={search} />
      </div>
      <div className="container">
        {searchList()}
      </div>
    </div>
  )
}

export default Search