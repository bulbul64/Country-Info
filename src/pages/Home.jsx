import { Suspense, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { Navbar } from '../components/Navbar';
import { fetchCountries } from '../services/countryApi';
import { SearchModal } from '../components/SearchModal';

export const Home = () => {
  const [open, setOpen] = useState(false);
  const countries = fetchCountries();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="my-20">
        <Navbar onSearchClick={() => setOpen(true)} />
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-max">
          <Suspense fallback={<div>Loading...</div>}>
            <CountryCard country={countries} />

            {/* {countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))} */}
          </Suspense>
          {open && <SearchModal onClose={() => setOpen(false)} countries={countries} />}
        </div>
      </div>
    </div>
  );
};
