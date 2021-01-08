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
var borders = document.querySelector('.borders')
//DOM BUTTON
var btn_back = document.getElementById("btn-back")


// api - pasarle nombre país 

var item = JSON.parse(localStorage.getItem("pais"));

// RELLANAR LOS CAMPOS

img_bandera.src =item.flag 
title_bandera.textContent = item.name
native_name.textContent = item.nativeName
population.textContent = item.population
region.textContent = item.region
sub_region.textContent = item.subregion
capital.textContent = item.capital
currencies.textContent = item.currencies.name //array controlar sacar los datos
lenguajes.textContent = item.languages.name  //tmbn array 
borders.textContent = item.borders // tmbn array

var frase_final = ""; 
item.borders.forEach(element => {

    frase_final = frase_final + element + " ";   
});
borders.textContent = frase_final

btn_back.addEventListener('click', function(){

    //cambiar pagina detalle
    window.location.href='index.html'
    //detalle del item click
    //localStorage.setItem('pais',JSON.stringify(item))

})
