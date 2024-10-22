// type rsc for shortcut

import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css';

const Countris = () => {
    const [countries, setCountries] = useState([]);
    const [VisitedCountries, setVisitedCountries] = useState([]);
    const [VisitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...VisitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flags => {
        const newVisitedFlags = [...VisitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }
    

    // Load API data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])

    return (
        <div>
            <div>
                <h4>Countries : {countries.length}</h4>
                <p>Visited Countries : {VisitedCountries.length}</p>
                <ul>
                    {
                        VisitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
                <div className="flags-container">
                    {
                        VisitedFlags.map(flag => <img src={flag}></img>)
                    }
                </div>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.ccs2} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countris;