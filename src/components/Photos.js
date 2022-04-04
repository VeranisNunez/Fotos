import { useEffect, useState } from "react"
import Pic from "./Pic"

export default function Photos() {

  let [pics, setPics] = useState([])
  let [star, setStars] = useState([])
  let [statePag, setStatePag] = useState(true)
  let url = 'https://picsum.photos/v2/list?page=1&limit=12'

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPics(data)
      })
      .catch((error) => {
        console.log(error);
      })
  })

  function saveStar(urlPhoto) {
    let listStar = [...star]
    let val = listStar.findIndex(ele => ele === urlPhoto)
    if (val == -1) {
      listStar.push(urlPhoto)
    }else{
      listStar.splice(val, 1);
    }
    setStars(listStar)
  }

  return (
    <div className="container p-5">
      <div className="header pb-4 px-5">
        <h1 className="fw-bolder"> FOTOS </h1>
        {
          statePag ?
            <button className="btn btn-info fw-bolder" onClick={()=>setStatePag(false)}> Ver fotos favoritas</button>
          :
            <button className="btn btn-info fw-bolder" onClick={()=>setStatePag(true)}> Ver todas las fotos</button>
        }
      </div>
      <div className="row row-cols-3 gy-3" style={{minHeight: '100vh'}}>
        {
          statePag ?
            pics.length !== 0 ?
              pics.map(photo => {
                return (
                  <Pic urlPhoto={photo.download_url} star={star} saveStar={saveStar} />
                )
              })
            :
              <h4>No hay fotos</h4>
          :
            star.length !== 0 ?
              star.map(photo => {
                return (
                  <Pic urlPhoto={photo} star={star} saveStar={saveStar} />
                )
              })
            :
              <h4>No hay fotos favoritas</h4>
        }
      </div>
    </div>
  )
}