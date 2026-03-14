const CountryShow = ({ country }) => {
  // console.log(country)
  return (
    <div className="card bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      <figure className="h-40 overflow-hidden">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{country.name.common}</h2>

        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
        </div>

        <button className="btn btn-sm rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white flex items-center gap-2 shadow-md hover:scale-105 transform transition-all mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          View Details
        </button>
      </div>
    </div>
  );
};

export default CountryShow;


// {
//     "flags": {
//         "png": "https://flagcdn.com/w320/gw.png",
//         "svg": "https://flagcdn.com/gw.svg",
//         "alt": "The flag of Guinea-Bissau features a red vertical band on its hoist side that takes up about two-fifth the width of the field, and two equal horizontal bands of yellow and green adjoining the vertical band. A five-pointed black star is centered in the vertical band."
//     },
//     "name": {
//         "common": "Guinea-Bissau",
//         "official": "Republic of Guinea-Bissau",
//         "nativeName": {
//             "por": {
//                 "official": "República da Guiné-Bissau",
//                 "common": "Guiné-Bissau"
//             },
//             "pov": {
//                 "official": "República da Guiné-Bissau",
//                 "common": "Guiné-Bissau"
//             }
//         }
//     },
//     "cca3": "GNB",
//     "capital": [
//         "Bissau"
//     ],
//     "region": "Africa",
//     "population": 1781308
// }