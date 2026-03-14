export const fetchCountries = async () => {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3',
  );
  return res.json();

};
