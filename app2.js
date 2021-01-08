///DOM DETAILS
var img_bandera = document.querySelector('.img_bandera')
var title_bandera = document.querySelector('.title_bandera')
var native_name = document.querySelector('.native_name')
var population = document.querySelector('.population')
var region = document.querySelector('.region')
var sub_region = document.querySelector('.sub_region')
var capital = document.querySelector('.capital')
var top_lvl_domain = document.querySelector('.top_lvl_domain')
var currencies = document.querySelector('.currencies')
var lenguajes = document.querySelector('.lenguajes')
var borders = document.querySelector('.border_countries')
//DOM BUTTON
var btn_back = document.getElementById("btn-back")
//navbar
var navBar = document.querySelector(".navbar")

// api - pasarle nombre país 

var item = JSON.parse(localStorage.getItem("pais"));
rellenarCampos(item)
// RELLANAR LOS CAMPOS
function rellenarCampos(item){
img_bandera.src =item.flag 
title_bandera.textContent = item.name
native_name.textContent = item.nativeName
population.textContent = item.population
region.textContent = item.region
sub_region.textContent = item.subregion
capital.textContent = item.capital
currencies.textContent = item.currencies.name //array controlar sacar los datos
lenguajes.textContent = item.languages.name  //tmbn array 
//borders.textContent = item.borders // tmbn array

item.borders.forEach(element => {
    
    var btn = document.createElement("button");
    borders.appendChild(btn)
    btn.textContent = element
    btn.style.margin = "5px"
    btn.addEventListener('click', function(){
        console.log("1")
            fetch('https://restcountries.eu/rest/v2/alpha/' + element)
                .then(function (response) {
                    console.log("2")
                    return response.json();
                    
                })
                .then(function (myJson) {
                    item = myJson
                    borders.innerHTML = ""  
                    rellenarCampos(item)
                   
                });
        
    })
})


  }  //btn.innerHTML = element
   // borders.appendChild(btn)
     // añade el elemento creado y su contenido al DOM

     function bgChangeColor(e){
        //DOM
        var element = document.body;
        if (navBar.classList.contains("navbar-light")){
            navBar.classList.remove("navbar-light")
            navBar.classList.remove("bg-light")
            navBar.classList.add("navbar-dark")
            navBar.classList.add("bg-dark")
           
        }else {
            navBar.classList.add("navbar-light")
            navBar.classList.add("bg-light")
            navBar.classList.remove("navbar-dark")
            navBar.classList.remove("bg-dark")
        }

        element.classList.toggle("darkModeWhite");
   
        
    }
//borders.textContent = frase_final

btn_back.addEventListener('click', function(){

    //cambiar pagina detalle
    window.location.href='index.html'
    //detalle del item click
    localStorage.setItem('pais',JSON.stringify(item))

})

//color btn background

