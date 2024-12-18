


let valuesearch = document.getElementById('valuesearch');
let city = document.getElementById('city');
let temprature = document.getElementById('temprature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('Pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valuesearch.value != '') {
        searchweather();
    }
});

let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const searchweather = () => {
    fetch(url + '&q=' + valuesearch.value)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod == 200) {
                city.querySelector('figcaption').innerText = data.name;

                if (data.weather && data.weather[0]) {
                    temprature.querySelector('img').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                    description.innerText = data.weather[0].description;
                }

                temprature.querySelector('figcaption span').innerText = data.main.temp;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            } else {
                city.querySelector('figcaption').innerText = '';
                temprature.querySelector('img').src = '';
                temprature.querySelector('figcaption span').innerText = '';
                description.innerText = '';
                clouds.innerText = '';
                humidity.innerText = '';
                pressure.innerText = '';
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valuesearch.value = '';
        });
};

const initApp = () => {
    valuesearch.value = 'washington';
    searchweather();
};
initApp();

