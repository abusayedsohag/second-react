// type rsc for shortcut

import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countris = () => {
    const [countries, setCountries] = useState([]);

    // Load API data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            {
                countries.map(country => <Country key={country.ccs2} country={country}></Country>)
            }
        </div>
    );
};

export default Countris;