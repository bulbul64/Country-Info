import { use } from 'react';
import CountryShow from './CountryShow';

const CountryCard = ({ country }) => {
  const countries = use(country);
  
  return (
    <>
      {countries.map((country) => (
        <CountryShow key={country.cca3} country={country} />
      ))}
    </>
  );
};

export default CountryCard;
