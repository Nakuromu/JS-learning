//-----------Exercise-1(Calendar)-----------//

// const CalendarEl = document.querySelector('.calendar');

// let prevTdEl = null;

// const hendelClick = event => {
//     if(event.target.nodeName !== 'TD' || event.target.textContent === ''){
//         return;
//     }

//     if(prevTdEl === event.target){
//         event.target.classList.toggle('active');

//         return;
//     }

//     if(prevTdEl){
//         prevTdEl.classList.remove('active');
//     }

//     event.target.classList.add('active');

//     prevTdEl = event.target;
// }

// CalendarEl.addEventListener('click', hendelClick);

//-----------Exercise-2(Search Bar)-----------//

const countries = [
    {
        name:'Ukraine',
        capital:'Kyiv',
        population: '42 000 000',
        area: '603.628',
    },
    {
        name:'Uk',
        capital:'London',
        population: '62 000 000',
        area: '303.628',
    },
    {
        name:'USA',
        capital:'Washington',
        population: '342 000 000',
        area: '8.603.628',
    },
    {
        name:'Philipines',
        capital:'hz',
        population: '102 000 000',
        area: '203.628',
    },
    {
        name:'Pakistan',
        capital:'hz',
        population: '160 000 000',
        area: '603.628',
    },
    {
        name:'Japen',
        capital:'Tokio',
        population: '142 000 000',
        area: '303.628',
    },
]

const searchInputEl = document.querySelector('.search-input');
const outputError = document.querySelector('.output-error');
const countryCardEl = document.querySelector('.country-card-list');

const CreateCountryCard = ({name, capital, population, area}) =>{
    return` <li class="country-card-item"><strong>Country: </strong>${name}</li>
        <li class="country-card-item"><strong>Capital: </strong>${capital}</li>
        <li class="country-card-item"><strong>Population: </strong>${population}</li>
        <li class="country-card-item"><strong>Area: </strong>${area}</li>`;
};

const handleSearchCountry = ({target}) => {
    const searchQuery = target.value.toLowerCase().trim();

    console.log(searchQuery);

    if(!searchQuery){
        outputError.innerHTML = '';
        countryCardEl.innerHTML = '';

        return;
    }

    const foundCountry = countries.find((el) => el.name.toLowerCase() === searchQuery);

    if(!foundCountry) {
        outputError.textContent = 'Country not found';
        countryCardEl.innerHTML = '';

        return;
    }

    outputError.innerHTML = '';
    countryCardEl.innerHTML = CreateCountryCard(foundCountry);
};

const debouncedFunc = _.debounce(handleSearchCountry, 700)

searchInputEl.addEventListener('input', debouncedFunc);