export default function Photo({urlPhoto, star, saveStar}) {
  return(
    <div className="col col-photo">
      <div className="photo">
        <div className="star">
          {
            star.indexOf(urlPhoto) == -1 ?
              <i
                className='far fa-star'
                style={{ cursor: 'pointer' }}
                onClick={() => { saveStar(urlPhoto) }}
              />
            :
              <i
                className='fas fa-star'
                style={{ cursor: 'pointer' }}
                onClick={() => { saveStar(urlPhoto) }}
              />
          }
        </div>
        <img src={urlPhoto} alt="img" />
      </div>
    </div>
  )
}