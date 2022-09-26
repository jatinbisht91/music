import React from 'react'
import Banner from '../Components/Banner';

function Favourite() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <>
      <div className="d-flex flex-column container-fluid p-2 col-10" style={{backgroundColor:"black",color:"white"}} >
        <Banner><h1>FAVOURITE</h1></Banner>
        {fav.map((fav, i) => {
          return <div className='d-flex fav-row border-bottom border-primary  my-2  w-100 mx-auto cardHover' key={i}>
            <span className='col-6 '><img src={fav.img} className="h-100 py-2  " alt="cover" style={{ objectFit: "cover" }} /></span>
            <span className="col-6 d-flex justify-content-center align-items-center">{fav.title}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default Favourite