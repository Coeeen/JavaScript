//chwytaki
const Pytanie = document.querySelector('#Pytanie');
const Wybory = Array.from(document.querySelectorAll('.Odpowiedz'));
const progressText = document.querySelector('#progressText');
const wynikText = document.querySelector('#wynik');
const FullPasek = document.querySelector('#FullPasek');
const czas=document.getElementById('#zegar')
const licznik=document.getElementById('zegar');

//Inicjalizacja pol
//pusty obiekt
let AktualniePytanie = {}
let AkceptowacOdpowiedzi = true
let wynik = 0
let LicznikPytan = 0
//pusta tablica przechowujace pytania ktore mga byc wyswietlone
let MozliwePytania = []
let start=90;
//stale
const wynik_punkty = 100
const MAX_Pytania = 10;


//tablica pytan automatycznie przypisuje 
let Pytania = [
    {
        Pytanie: 'Jak witaja sie papieze?',
        Wynik1: 'Niech bedzie pochwalony',
        Wynik2: 'Papiez jest tylko jeden',
        Wynik3: 'Czołem',
        Wynik4: 'Zadna z podanych',
        Odpowiedz: 2,
    },
    {
        Pytanie:
            "Pod jakim drzewem siedzi zajac gdy pada deszcz??",
        Wynik1: "Sosna",
        Wynik2: "Debem",
        Wynik3: "Zadnym",
        Wynik4: "Mokrym",
        Odpowiedz: 4,
    },
    {
        Pytanie: "Kiedy jestes w domu bez glowy?",
        Wynik1: "Gdy jej zapomnisz ze szkoly",
        Wynik2: "Gdy wygladasz przez okno",
        Wynik3: "Zawsze masz glowe",
        Wynik4: "Gdy jestes pomiedzy pokojami",
        Odpowiedz: 2,
    },
    {
        Pytanie: "Kto zabił Kaina?",
        Wynik1: "Jego Brat",
        Wynik2: "Lew",
        Wynik3: "Pokonała go choroba",
        Wynik4: "Nikt",
        Odpowiedz: 4,
    },
    {
        Pytanie: "Ile zwierzat Abel zabrał na Arke?",
        Wynik1: "Abel nie mial arki",
        Wynik2: "75",
        Wynik3: "74",
        Wynik4: "Zadna z podanych",
        Odpowiedz: 1,
    },
    {
        Pytanie: "Gdzie sa rzeki suche?",
        Wynik1: "Na pustyni",
        Wynik2: "Na mapach",
        Wynik3: "Zadna z podanych",
        Wynik4: "Pod ziemia",
        Odpowiedz: 2,
    },
    {
        Pytanie: "Polski baran stoi na granicy polsko-czeskiej. Czyje będzie mleko?",
        Wynik1: "Czechow",
        Wynik2: "Nie ma takiej granicy",
        Wynik3: "Polakow (w koncu to polski baran)",
        Wynik4: "Zadna z podanych",
        Odpowiedz: 4,
    },
    {
        Pytanie: "Który z królów Polski stał do dołu nogami?",
        Wynik1: "Mieszko I",
        Wynik2: "Bolesław I Chrobry",
        Wynik3: "Kazdy",
        Wynik4: "Zaden",
        Odpowiedz: 3,
    },
    {
        Pytanie: "Ktory miesiac ma 28 dni?",
        Wynik1: "Kazdy",
        Wynik2: "Luty",
        Wynik3: "Grudzien",
        Wynik4: "Zaden",
        Odpowiedz: 1,
    },
    {
        Pytanie: "Jakie zeby pojawiaja sie u ludzi najpóźniej?",
        Wynik1: "Zeby madrosci",
        Wynik2: "Sztuczne",
        Wynik3: "Zadna z podanych",
        Wynik4: "Mleczne",
        Odpowiedz: 2,
    },
]


//resecik
StartGry = () => {
    LicznikPytan = 0
    wynik = 0
    MozliwePytania = [...Pytania]
    
    NowePytanie()
}
//funckja sprawdzajaca czy skonczyly sie pytania jesli tak ustaw wynik i przejdz do konca
NowePytanie = () => {
    
    if(MozliwePytania.length === 0 || LicznikPytan > MAX_Pytania) {
        localStorage.setItem('OstatniWynik', wynik)

        return window.location.assign('koniec.html')
    }
    //zwiekszanie licznika pytania
    LicznikPytan++

    //Napis pytanie jedno z
    progressText.innerText = `Pytanie ${LicznikPytan} z ${MAX_Pytania}`

    //Zapelnienie paska za pomoca css
    FullPasek.style.width = `${(LicznikPytan/MAX_Pytania) * 100}%`
   
    //randomwePytanie
    const PytaniaIndex = Math.floor(Math.random() * MozliwePytania.length)

    AktualniePytanie = MozliwePytania[PytaniaIndex]
    Pytanie.innerText = AktualniePytanie.Pytanie

    //Liczbaodpowiedzi
    Wybory.forEach(Wynik => {
        const Liczba = Wynik.dataset['number']
        Wynik.innerText = AktualniePytanie['Wynik' + Liczba]
    })

    MozliwePytania.splice(PytaniaIndex, 1)

    AkceptowacOdpowiedzi = true
}
//dla kazdej opcji wyboru
Wybory.forEach(Wynik => {
    //na click
    Wynik.addEventListener('click', e => {
        //jesli nie mozna
        if(!AkceptowacOdpowiedzi) 
        return AkceptowacOdpowiedzi = false
        //koniec

        const WybranyWynik = e.target
        const WybranaOdpowiedz = WybranyWynik.dataset['number']

        //Sprawdz czy odpowiedz jest dobra
        let SPRAWDZ = WybranaOdpowiedz == AktualniePytanie.Odpowiedz ? 'Dobra' : 'Zla'
     
        if(SPRAWDZ === 'Dobra') {
            ZwiekszWynik(wynik_punkty)
        }
        if(SPRAWDZ === 'Zla') {
            ZmniejszWynik(wynik_punkty)
            
        }

        WybranyWynik.parentElement.classList.add(SPRAWDZ)
 
        //jak szybko ma przeskakiwac
        setTimeout(() => {
            WybranyWynik.parentElement.classList.remove(SPRAWDZ)
            NowePytanie()
         
        }, 1000)
    })
})
//funkcje zwiekszajace/zmniejszajace wynik
ZwiekszWynik = num => {
    wynik +=num
    wynikText.innerText = wynik
}
ZmniejszWynik = num => {
    wynik -=num
    wynikText.innerText = wynik
}
//aktualizuje nam licznik co sekunde
setInterval(aktualizujLicznik,1000)

//wywala na poczatek jesli skonczyl sie czas
function aktualizujLicznik(){
    start--
    licznik.innerHTML=start;
    if(start===0){
        return window.location.assign('Start.html')
    }
}

StartGry()