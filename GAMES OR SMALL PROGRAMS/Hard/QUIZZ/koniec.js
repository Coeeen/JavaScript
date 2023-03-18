//chwytaki
const Nickgracza = document.querySelector('#Nickgracza')
const ZapiszWynikBtn = document.querySelector('#ZapiszWynikBtn')
const TwojWynik = document.querySelector('#TwojWynik')
const OstatniWynik = localStorage.getItem('OstatniWynik')
//JSON jest specjalnym formatem zapisu różnych danych (zapisuje nicki)
const Topka = JSON.parse(localStorage.getItem('Topka')) || []


TwojWynik.innerText = OstatniWynik
//pusty nick==block
Nickgracza.addEventListener('keyup', () => {
    ZapiszWynikBtn.disabled = !Nickgracza.value
})

ZapiszWynik = e => {
    //po kliknietciu zapisanie zostanie wynik
    e.preventDefault()
     

    //zapisuje nick i warosc do "tablicy"
    const Wynik = {
        Wynik: OstatniWynik,
        name: Nickgracza.value
    } 
    //dodaje do topki wynik i nazwe
    Topka.push(Wynik)

    //sort powoduje uklada nam posortowane
    Topka.sort((a,b) => {
        return b.Wynik - a.Wynik
    })
    //tnie nam tablice po indexie ale tez nie moze byc powtorzen (w nickach)
    Topka.splice(5)

    //zapisuje lokalnie jako json 
    localStorage.setItem('Topka', JSON.stringify(Topka))
    window.location.assign('Start.html')

    
}