import { useState } from 'react';
import './Homepage.css';
import ShowData from './ShowData';
import './index.css'

const Homepage= ()=>{
    const [country, setCountry]= useState('');
    const [countryTouched, setCountryTouched]= useState(false);
    const [CountryData ,setCountryData] = useState({});
    const [apiRan, setApiRan]= useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const inputHandler=(event)=>{
        
        // setCountryTouched(false);
        event.preventDefault();
        setCountry(event.target.value);
        setCountryTouched(true);
    }

    
    const apiHandler= async()=> {
        try{
        setIsLoading(true);

        const response = await fetch(`https://restcountries.com/v2/name/${country}`);
        const data = await response.json();

        setCountryData({capital: data[0].capital,
            population: data[0].population,
            latitude: data[0].latlng[0],
            longitude: data[0].latlng[1],
            flag: data[0].flag
        });
        setApiRan(true);
        setIsLoading(false);
        setIsError(false); 
    }
   catch(error){
    console.log("No such country found");
    setIsLoading(false);
    setIsError(true);
}
    }

    return(
        <div className='body'>
            <h2>Get Details By Country</h2>

            <div ><input type='text' data-testid='countryinput' placeholder="Enter Country" onChange={inputHandler} style={{height: '2rem', width:'10rem'}}></input></div>
        
            <button className='p' disabled={!countryTouched} type='submit' onClick={apiHandler}>Submit</button>

            {isLoading && <p>Getting yor data...</p>}
            
            {apiRan && <ShowData item={CountryData} />}
            {/* {console.log(CountryData)} */}

            {isError && <p>No such country found</p>}
        </div>
    );
};

export default Homepage;