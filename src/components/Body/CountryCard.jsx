import './Body.css'


const CountryCard = ({flagimg,Name,popu,region,capital}) => {
    return (
          <div className="country-card">
  
              <img src={flagimg} alt = "flags"></img>
              <div className="card-text">
                  <h3 className="card-title">{Name}</h3>
                  <p><b>Population:</b>{popu}</p>
                  <p><b>Region:</b>{region}</p>
                  <p><b>Capital:</b>{capital}</p>
              </div>
  
          </div>  
  
    )
  }
  
  export default CountryCard
  
