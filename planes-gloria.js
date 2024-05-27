// se instancian los precios de las h3
const priceBasic = document.getElementById('price-basic');
const priceEsencial = document.getElementById('price-esencial');
const pricePro = document.getElementById('price-pro');
//se crean funciones de cambio de precio
const changePriceToAnnual = () => {
    //se cambia el valor interno del  h3
    priceBasic.innerHTML = '$390 <span style="font-size: small;">/ por año</span>';
    priceEsencial.innerHTML = '$990 <span style="font-size: small;">/ por año</span>';
    pricePro.innerHTML = '$2490 <span style="font-size: small;">/ por año</span>';
};
const changePriceToMonthly = () => {
    priceBasic.innerHTML = '$39 <span style="font-size: small;">/ por mes</span>';
    priceEsencial.innerHTML = '$99 <span style="font-size: small;">/ por mes</span>';
    pricePro.innerHTML = '$249 <span style="font-size: small;">/ por mes</span>';
};
//se instancia a los botones y se les agrega el evento
document.getElementById('annual-btn').addEventListener('click', changePriceToAnnual);
document.getElementById('monthly-btn').addEventListener('click', changePriceToMonthly);