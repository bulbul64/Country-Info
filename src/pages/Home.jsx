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
          <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-50">
                <div className="flex flex-col items-center gap-4">
                  {/* Spinner */}
                  <div className="w-20 h-20 border-8 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
                  {/* Loading Text */}
                  <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
                    Loading, please wait...
                  </p>
                </div>
              </div>
            }
          >
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
