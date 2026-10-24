import {countries} from "./data.js"

const countriesContainer = document.querySelector("#countries");
const searchInput = document.querySelector("#search");
const regionFilter = document.querySelector("#region-filter");
const darkModeButton = document.querySelector("#dark-mode");


function allCountries(countryList) {
    countriesContainer.innerHTML ='';

    countryList.forEach((country)=>{
        countriesContainer.innerHTML += `
            <article class = 'country'>
            <img src="${country.flag}" alt="${country.name} flag">

                
                <div class="country-info">
                    <h2>${country.name}</h2>

                    <p><strong>Population:</strong> ${country.population.toLocaleString("en-US")}</p>

                    <p><strong>Region:</strong> ${country.region}</p>

                    <p><strong>Capital:</strong> ${country.capital}</p>
                </div>
            </article>
        
        `;
    })
}

allCountries(countries);

darkModeButton.addEventListener("click", (e)=>{
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkModeButton.textContent = "🔆 Light mode"
    }else{
        darkModeButton.textContent = "☾ Dark Mode";
    }
})

function filterCountries() {
    const selectedRegion = regionFilter.value;

    const result = countries.filter((country) => {
        if (selectedRegion === "") {
            return true;
        }

        return country.region === selectedRegion;
    });

    allCountries(result);
}

regionFilter.addEventListener("change", filterCountries);


function searchCountry() {
    const value = searchInput.value.toLowerCase().trim();

    const result = countries.filter((country) => {
        return country.name.toLowerCase().includes(value)
    });

    allCountries(result)
}

searchInput.addEventListener("input", searchCountry);