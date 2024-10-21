// type rsc for shortcut structure
import './country.css';

const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='box'>
            <img src={flags.png} className='flag'/>
            <h2>{name?.common} </h2>
        </div>
    );
};

export default Country;