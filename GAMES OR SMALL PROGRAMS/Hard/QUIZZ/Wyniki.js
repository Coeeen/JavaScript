const ListaWynikow = document.querySelector('#ListaWynikow')
//pobiera dane z magazynu
const Topka = JSON.parse(localStorage.getItem("Topka")) 

//Wypisanie Listy wynikow (map przechodzi po wszystkich elementach)
ListaWynikow.innerHTML =Topka.map(Wynik => {
    //ZapiszWynik()
    return `<li class="Wyniki">${Wynik.name} - ${Wynik.Wynik}</li>`
    
}).join("")
// join powoduje przerwę miedzy wynikami.