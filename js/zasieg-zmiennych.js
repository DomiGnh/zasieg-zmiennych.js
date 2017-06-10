'use strict';
//wartosc lokalna jest wazniejsza niz globalana, wiec jezeli 2 wartosci beda sie tak samo nazywac i jednak bedzie globalna a druga lokalna to lokalna ja nadpisze

var krzysiek=3000
var jurek=5000;
var jola=7500
var sergio=2500;


function policzSumeKasy(skladowaSumy1, skladowaSumy2, skladowaSumy3, skladowaSumy4)
{
    var sumaKasy;
    sumaKasy= skladowaSumy1 + skladowaSumy2 + skladowaSumy3 + skladowaSumy4;
    
    return= sumaKasy
}


sumaKasy =policzSumeKasy( krzysiek, jurek, jola, sergio);
console.log(sumaKasy);