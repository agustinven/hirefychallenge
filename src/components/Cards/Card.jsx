"use client"
import React from 'react';
import { Twemoji } from 'react-emoji-render';

const Card = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px]">
      {countries.map((country) => (
        <div
          key={country.code}
          className="m-2 p-3 border-[2px] border-[#505568] rounded-[20px]"
        >
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-white mr-4 flex items-center justify-center text-[25px]">
              <Twemoji text={`${country.emoji}`} size="128" />
            </div>

            <div>
              <h3 className="text-[25px] font-semibold">{country.name}</h3>
              <div className="flex flex-row text-[12px] items-center">
                {/* Añadido items-center para centrar verticalmente */}
                <svg
                  className="mr-2"
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66667 0.5C2.08667 0.5 0 2.58988 0 5.17386C0 7.95814 2.94667 11.7974 4.16 13.2596C4.42667 13.5801 4.91333 13.5801 5.18 13.2596C6.38667 11.7974 9.33333 7.95814 9.33333 5.17386C9.33333 2.58988 7.24667 0.5 4.66667 0.5ZM4.66667 6.84309C3.74667 6.84309 3 6.09527 3 5.17386C3 4.25244 3.74667 3.50462 4.66667 3.50462C5.58667 3.50462 6.33333 4.25244 6.33333 5.17386C6.33333 6.09527 5.58667 6.84309 4.66667 6.84309Z"
                    fill="#4A94CC"
                  />
                </svg>
                <div className="border-r border-[#535659] pr-2 mr-2">
                  {country.capital}
                </div>
                <svg
                  className="mr-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 13.25C5.63542 13.25 4.82292 13.0859 4.0625 12.7578C3.30208 12.4297 2.64062 11.9844 2.07812 11.4219C1.51562 10.8594 1.07031 10.1979 0.742188 9.4375C0.414062 8.67708 0.25 7.86458 0.25 7C0.25 6.13542 0.414062 5.32292 0.742188 4.5625C1.07031 3.80208 1.51562 3.14062 2.07812 2.57812C2.64062 2.01562 3.30208 1.57031 4.0625 1.24219C4.82292 0.914062 5.63542 0.75 6.5 0.75C7.36458 0.75 8.17708 0.914062 8.9375 1.24219C9.69792 1.57031 10.3594 2.01562 10.9219 2.57812C11.4844 3.14062 11.9297 3.80208 12.2578 4.5625C12.5859 5.32292 12.75 6.13542 12.75 7C12.75 7.86458 12.5859 8.67708 12.2578 9.4375C11.9297 10.1979 11.4844 10.8594 10.9219 11.4219C10.3594 11.9844 9.69792 12.4297 8.9375 12.7578C8.17708 13.0859 7.36458 13.25 6.5 13.25ZM6.5 12C7.89583 12 9.07812 11.5156 10.0469 10.5469C11.0156 9.57812 11.5 8.39583 11.5 7C11.5 6.92708 11.4974 6.85156 11.4922 6.77344C11.487 6.69531 11.4844 6.63021 11.4844 6.57812C11.4323 6.88021 11.2917 7.13021 11.0625 7.32813C10.8333 7.52604 10.5625 7.625 10.25 7.625H9C8.65625 7.625 8.36198 7.5026 8.11719 7.25781C7.8724 7.01302 7.75 6.71875 7.75 6.375V5.75H5.25V4.5C5.25 4.15625 5.3724 3.86198 5.61719 3.61719C5.86198 3.3724 6.15625 3.25 6.5 3.25H7.125C7.125 3.01042 7.1901 2.79948 7.32031 2.61719C7.45052 2.4349 7.60938 2.28646 7.79688 2.17188C7.58854 2.11979 7.3776 2.07812 7.16406 2.04688C6.95052 2.01562 6.72917 2 6.5 2C5.10417 2 3.92188 2.48438 2.95313 3.45313C1.98438 4.42188 1.5 5.60417 1.5 7H4.625C5.3125 7 5.90104 7.24479 6.39062 7.73438C6.88021 8.22396 7.125 8.8125 7.125 9.5V10.125H5.25V11.8438C5.45833 11.8958 5.66406 11.9349 5.86719 11.9609C6.07031 11.987 6.28125 12 6.5 12Z"
                    fill="#4A94CC"
                  />
                </svg>
                <div className="border-r border-[#535659] pr-2 mr-2">
                  {country.states && country.states.length > 0
                    ? country.states.length + " states"
                    : "--"}
                </div>
                <svg
                  className="mr-2"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0188 8.03748L9.43128 7.85623C9.05003 7.81248 8.67503 7.94373 8.40628 8.21248L7.25628 9.36247C5.48753 8.46247 4.03753 7.01873 3.13753 5.24373L4.29378 4.08748C4.56253 3.81873 4.69378 3.44373 4.65003 3.06248L4.46878 1.48748C4.39378 0.856226 3.86253 0.381226 3.22503 0.381226H2.14378C1.43753 0.381226 0.850025 0.968726 0.893775 1.67498C1.22503 7.01248 5.49378 11.275 10.825 11.6062C11.5313 11.65 12.1188 11.0625 12.1188 10.3562V9.27497C12.125 8.64373 11.65 8.11248 11.0188 8.03748Z"
                    fill="#4A94CC"
                  />
                </svg>
                <div>{"+ " + country.phone}</div>
              </div>
            </div>
          </div>
          <div className="py-3 border-b border-[#535659]">
            <p className="text-[16px] mb-1">Currency</p>
            <div>
              {/* Verificar si country.currency existe antes de llamar a split() */}
              {country.currency &&
                country.currency
                  .split(",")
                  .slice(0, 2)
                  .map((currency, index) => (
                    <span
                      key={index}
                      className="bg-[#2DCAB1] w-auto px-3 py-1 rounded-xl mr-2 text-[14px]"
                    >
                      {currency}
                    </span>
                  ))}
              {/* Mostrar el número de monedas adicionales si hay más de dos */}
              {country.currency && country.currency.split(",").length > 2 && (
                <span>+{country.currency.split(",").length - 2}</span>
              )}
            </div>
          </div>
          <div className="py-3">
            <p className="text-[16px] mb-1">Languages</p>
            <div>
              {/* Mostrar los dos primeros idiomas y luego contar los adicionales */}
              {country.languages.slice(0, 2).map((language, index) => (
                <span
                  key={index}
                  className="bg-[#4A94CC] w-auto px-3 py-1 rounded-xl mr-2 text-[14px]"
                >
                  {language.name}
                </span>
              ))}
              {/* Mostrar el número de idiomas adicionales si hay más de dos */}
              {country.languages.length > 2 && (
                <span>+{country.languages.length - 2}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
