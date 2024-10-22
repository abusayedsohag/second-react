// type rsc for shortcut structure
import { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [Toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!Toggle);
    }

    const handleButton = () => {
        handleVisitedCountries(country);
        handleToggle();
    }

    return (
        <div className={`box ${Toggle && 'visited'}`}>
            <img src={flags.png} className='flag'/>
            <h2 className={`${Toggle && 'textColor'}`}>{name?.common} </h2>
            <h5 className={`${Toggle && 'textColor'}`}>Population : {population}</h5>
            <h5 className={`${Toggle && 'textColor'}`}>Area : {area}</h5>
            <h5 className={`${Toggle && 'textColor'}`}>Code : {cca3}</h5>
            <button onClick={handleButton}>{Toggle ? 'Visited' : 'Visite Here'}</button>
            <button onClick={() => handleVisitedFlags(flags.png)}>Flag Add</button>
            {Toggle ? 'Visiting': 'Visite Done'}
        </div>
    );
};

export default Country;