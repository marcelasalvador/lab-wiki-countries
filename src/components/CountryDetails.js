import { useParams, Link } from "react-router-dom"
import {useEffect, useState} from "react"


function CountryDetails(props) {

    const { id } = useParams();

    const [myCountry, setMyCountry] = useState(null);

    useEffect(() => {
        const foundCountry = props.countries.filter(singleCountry => singleCountry.alpha3Code === id)
        setMyCountry(foundCountry[0])
    }, [id, props.countries])


    return (

          <>
            {myCountry ? (
                <div class="col-7">
            <h1>{myCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{myCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {myCountry.area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {myCountry.borders.map(singleBorder => {
                        return<li><Link to={`/${singleBorder}`}></Link>{singleBorder}</li>
                    })}
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            ) : <p>loading...</p>} 
          </>
        
    )
    

}

export default CountryDetails