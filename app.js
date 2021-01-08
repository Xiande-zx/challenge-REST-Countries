var countries;
const divCountries = document.querySelector('.countries')
const searchInput = document.querySelector('.search')
const input = document.querySelector('.input')
const filter = document.querySelector('.form-select')

searchInput.addEventListener('change', search)

filter.addEventListener('change', filterRegion)

callApi("all")

function search() {

    controlSearch()

    var text = input.value.toLowerCase()

    var searchArray = [];

    console.log(text)
    for (var i = 0; i < countries.length; i++) {

        if (((countries[i].name).toLowerCase()).includes(text)) {

            searchArray.push(countries[i])
        }
    }

    searchArray.forEach(myFunction)
    changeColor()
}

function filterRegion() {

    if (filter.value == "none") {
        callApi("all")
    } else {
        callApi("region/" + filter.value)
    }
}

function myFunction(item, index) {

    var country = document.createElement("div");
    country.classList.add("whiteBox")
    country.classList.add("box")
    var img = document.createElement("img")
    img.src = item.flag
    let nameCountry = document.createElement("h3")
    nameCountry.innerHTML = item.name
    var population = document.createElement("p")
    population.innerHTML = "Population : ".bold() + item.population
    var region = document.createElement("p")
    region.innerHTML = "Region : ".bold() + item.region
    var capital = document.createElement("p")
    capital.innerHTML = "Capital : ".bold() + item.capital
   
    img.addEventListener('click', function () {

        //cambiar pagina detalle
        window.location.href = 'index2.html'
        //detalle del item click
        localStorage.setItem('pais', JSON.stringify(item))

    })

    country.appendChild(img)
    country.appendChild(nameCountry)
    country.appendChild(population)
    country.appendChild(region)
    country.appendChild(capital)
    divCountries.appendChild(country)

}

function controlSearch() {

    divCountries.innerHTML = ""

    /*
    while (divCountries.firstChild) {​​
        divCountries.removeChild(divCountries.firstChild);
      }​​*/
}

function callApi(par) {

    fetch('https://restcountries.eu/rest/v2/' + par)
        .then(function (response) {
            
            return response.json();
        })
        .then(function (myJson) {
            controlSearch()
            countries = myJson;
            countries.forEach(myFunction)
            changeColor()
        });
    
}