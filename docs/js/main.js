function validateForm() {
    var name =  document.getElementById('name').value;
    if (name === "") {
        document.querySelector('.status').innerHTML = "Pole z imieniem nie może być puste!";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email ==="") {
        document.querySelector('.status').innerHTML = "Pole z emailem nie może być puste!";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Niepoprawny email!";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject === "") {
        document.querySelector('.status').innerHTML = "Pole z tematem nie może być puste!";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message === "") {
        document.querySelector('.status').innerHTML = "Pole z wiadomością nie może być puste!";
        return false;
    }
    document.querySelector('.status').innerHTML = "Wysyłanie...";
}

function czytaj1()
{
    var dalej = 'Daniel doznał złamania obojczyka i do jutra będzie utrzymywany w śpiączce farmakologicznej, aby zmniejszyć obciążenie mózgu -' +
        ' stwierdził dyrektor sportowy Norweskiego Związku Narciarskiego, Clas Brede Braathen w rozmowie z telewizją NRK.<br><br>\n' +
        '\n' +
        '- W dotychczas przeprowadzonych badaniach nie znaleziono niczego, co mogłoby zagrażać życiu Daniela. Oczywiście odczuliśmy ogromną ulgę,' +
        ' kiedy ze szpitala napłynęły dobre wiadomości - dodaje działacz.<br><br>\n' +
        'Pierwszą informację o obrażeniach Daniela Andre Tandego przekazał naczelny lekarz komitetu organizacyjnego PŚ w Planicy, dr Tomislav Mirkovic: - Daniel został przyjęty do karetki nieprzytomny, musiał być intubowany i mechanicznie wentylowany. Po uzyskaniu stabilizacji, przewieźliśmy go helikopterem do Uniwersyteckiego Centrum Klinicznego w Lublanie. Wstępne badania są bardzo obiecujące. Teraz będziemy czekać 24 godziny, kiedy testy zostaną powtórzone. Jutro po południu będziemy wiedzieć więcej.\n' +
        '\n' +
        'Daniel Andre Tande został przyjęty do Uniwersyteckiego Centrum Klinicznego w Lublanie w stabilnym stanie i przeszedł wszystkie niezbędne badania. Prognozy wyglądają obiecująco: - Jesteśmy niezmiernie wdzięczni za profesjonalną pierwszą pomoc i opiekę medyczną po wypadku. Upadek Daniela wyglądał dramatycznie i teraz odczuwamy ulgę po pierwszej diagnozie, iż obrażenia nie zagrażają jego życiu. Mamy pełne zaufanie do Uniwersyteckiego Centrum Klinicznego w Lublanie - powiedział Clas Brede Braathen, dyrektor sportowy Norweskiego Związku Narciarskiego.';
    var tresc =
        '        <div class="text-center"><br>\n' +
        '        <img width="85%" height="85%" src="img/article11.jpg" alt="Upadek Daniela">\n' +
        '        </div><br>\n' +
        '        <div class="text-justify p-4">\n' +
        '        <span class="text-center"><b>W czasie serii próbnej przed czwartkowym konkursem Pucharu Świata w Planicy doszło do koszmarnego\n' +
        '                        upadku Norwega Daniela Andre Tandego!</b></span><br><br>\n' +
        '        <span class="text-center">Na 10 zawodników przed końcem serii próbnej Daniel Andre Tande zaliczył koszmarny wypadek. Tuż po\n' +
        '                        wyjściu z progu Norweg stracił panowanie nad nartami, a powietrze porwało mu lewą deskę. Skoczek natychmiast napiął całe\n' +
        '                        ciało i przycisnął do siebie ręce by chronić ograny wewnętrzne. Już wtedy wiedział, że skok zakończy się fatalnie.\n' +
        'Upadek wyglądał groźnie, jednak wieści, które po ponad godzinie napłynęły z norweskiego obozu, były optymistyczne. Norweg w szpitalu oddychał samodzielnie, jego stan określono jako stabilny.'+
        dalej+
        '        </span><br>\n' +
        '        ' +
        '        </div>\n';
    document.getElementById('article1').innerHTML = tresc;

}

function czytaj2()
{
    var dalej = '<br><br>W finale Kamil Stoch przypieczętował końcowy triumf lotem na 140 metr. Lider reprezentacji Polski pokonał tym samym o 20,3' +
        ' punktu' +
        ' Norwega Mariusa Lindvika (140,5 m) oraz o 23,4 pkt. Niemca Karla Geigera (133,5 m). Tuż za konkursowym podium znaleźli się Stefan Kraft' +
        ' (137 m), Robert Johansson (139 m) oraz Michael Hayboeck (137,5 m).<br><br>'+
        'Kamil Stoch po raz trzeci w karierze został triumfatorem Turnieju Czterech Skoczni. Reprezentant Polski triumfował wcześniej w 2017 i 2018 roku, tym samym zrównał się z Helmutem Recknagelem (1958, 1959 i 1961) oraz Bjoernem Wirkolą (1967, 1968 i 1969). Więcej zwycięstw mają tylko Fin Janne Ahonen (5 - 1999, 2003, 2005, 2006 i 2008) oraz Niemiec Jens Weissflog (4 - 1984, 1985, 1991 i 1996).';
    var tresc =
        '        <div class="text-center"><br>\n' +
        '        <img width="85%" height="85%" src="img/article22.jpg" alt="Upadek Daniela">\n' +
        '        </div><br>\n' +
        '        <div class="text-justify p-4">\n' +
        '        <span class="text-center"><b>Kamil Stoch zrobił to po raz trzeci! Trzykrotny mistrz olimpijski został triumfatorem 69. Turnieju Czterech Skoczni! "Rakieta z Zębu" przypieczętowała sukces 38. pucharowym zwycięstwem na Skoczni im. Paula Ausserleitnera (HS142) w Bischofshofen, dzięki skokom na 139 m i 140 m. Trzecie miejsce w końcowej klasyfikacji cyklu zajął Dawid Kubacki.</b></span><br><br>\n' +
        '        <span class="text-center">Pierwszą rundę konkursową rozegrano z 11. belki startowej. Halvor Egner Granerud na życzenie trenera' +
        ' startował z 10. platformy, ale nie uzyskał wymaganej odległości, aby otrzymać bonifikatę.'+
        dalej+
        '        </span><br>\n' +
        '        ' +
        '        </div>\n';
    document.getElementById('article2').innerHTML = tresc;

}

function czytaj3()
{
    var dalej = '<br><br>Na kolejnych pozycjach sklasyfikowani zostali Pius Paschke (103 m), Marius Lindvik (102 m), Yukiya Sato (104 m) oraz Michael Hayboeck (101 m). Czołową dziesiątkę zamykał Daniel Andre Tande (101 m).' +
        'Do finału awansowało łącznie czterech Polaków. Dwudziesty trzeci na półmetku był Kamil Stoch (96 m), a dwudziesty dziewiąty Andrzej' +
        ' Stękała (95 m). Klemens Murańka z wynikiem 93 metrów zakończył udział w zawodach na trzydziestej szóstej pozycji.<br><br>' +
        'W finale Piotr Żyła poszybował po największy sukces w swojej dotychczasowej karierze. Reprezentant Polski uzyskał wynik 102,5 metra i' +
        ' został mistrzem świata na normalnej skoczni. Srebrny medal wywalczył Karl Geiger (102 m), który do zwycięzcy stracił 3,6 punktu. Na' +
        ' najniższym stopniu podium znalazł się Anze Lanisek (101 m).<br><br>' +
        'Dla Piotra Żyły to piąty medal mistrzostw świata. Wcześniej miał złoto w drużynie w Lahti (2017) oraz trzy brązowe krążki - indywidualny z Lahti (2017) oraz zespołowe z Val di Fiemme (2013) i Falun (2015). 34-letni reprezentant Polski został ponadto najstarszym indywidualnym mistrzem świata w skokach narciarskich w historii.';
    var tresc =
        '        <div class="text-center"><br>\n' +
        '        <img width="85%" height="85%" src="img/article33.jpg" alt="Upadek Daniela">\n' +
        '        </div><br>\n' +
        '        <div class="text-justify p-4">\n' +
        '        <span class="text-center"><b>Jest złoto dla Polski! Piotr Żyła został mistrzem świata na normalnej skoczni w Oberstdorfie\n' +
        '                        (HS106)! Podopieczny trenera Michala Dolezala triumfował dzięki lotom na odległość 105 m oraz 102,5 m. Srebrny medal wywalczył Karl Geiger, a  brązowy Anze Lanisek. Piąty był Dawid Kubacki.</b></span><br><br>\n' +
        '        <span class="text-center"> Piotr Żyła odleciał swoim rywalom w pierwszej serii konkursowej. Reprezentant Polski poszybował na 105 metr i na półmetku rywalizacji prowadził z przewagą 3 punktów nad Anze Laniskiem (102,5 m) oraz 3,1 pkt. nad Ryoyu Kobayashim (104 m). Czwarte miejsce zajmował Karl Geiger (103,5 m), a piąty był Dawid Kubacki (102 m). Obrońca tytułu tracił 0,6 punktu do miejsca na podium.'+
        dalej+
        '        </span><br>\n' +
        '        ' +
        '        </div>\n';
    document.getElementById('article3').innerHTML = tresc;

}

//GENERATOR:

function dodajZadanie()
{ var item = {};
    item.nazwa = document.getElementById('nazwa').value;
    item.sponsor = document.getElementById('sponsor').value;
    item.kolor = document.getElementById('kolor').value;
    item.narty = document.getElementById('narty').value;
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista===null) lista=[];
    lista.push(item);
    localStorage.setItem('lista', JSON.stringify(lista));

    var tresc = "<img class='static-image' src='img/skoczek/cialo"+document.getElementById('kolor').value+".png'>";
    tresc += "<img class='static-image' src='img/skoczek/narty"+document.getElementById('narty').value+".png'>";
    document.getElementById('bok').innerHTML = tresc;
}
function pokazListe()
{ var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('zawodnicy');
    var str = "Twoja lista zawodników: <br><br>";
    if (lista===null) el.innerHTML=str+"<p>Pusta lista zawodników</p>";
    else {
        for(i=0;i<lista.length;i++)
        {
            str+="<div class='card border-0 transform on hover'>";
            str+="<img src='img/skoczek/cialo"+lista[i].kolor+".png' class='card-img-top img-sizing'>";
            str+="<img src='img/skoczek/narty"+lista[i].narty+".png' class='card-img-top img-sizing'>";
            str+="<div class='card-body'>";
            str+="<h6>"+lista[i].nazwa+"</h6>";
            str+="<button class='btnsend mr-1' type='button' onclick='usunZadanie("+i+")' >Usuń</button>";
            str+="<button class='btnsend' type='button' onclick='edycja("+i+")'>Edytuj</button>";
            str+="</div>";
        }
    }
    el.innerHTML=str;
}
function usunListe()
{
    localStorage.removeItem('lista');
    //zaktualizuj widok na stronie
    pokazListe();
}
function usunZadanie(i)
{ var lista = JSON.parse(localStorage.getItem('lista'));
    if (confirm("Usunąć zawodnika?")) lista.splice(i,1);
    localStorage.setItem('lista', JSON.stringify(lista));
    pokazListe();
}

function edycja(i)
{
    var lista = JSON.parse(localStorage.getItem('lista'));
    var lista2 = JSON.parse(localStorage.getItem('lista'));
    lista[i].nazwa = prompt("Podaj nazwę:",lista2[i].nazwa);
    lista[i].sponsor = prompt("Podaj cenę:",lista2[i].sponsor);
    lista[i].kolor = prompt("Podaj kolor:",lista2[i].kolor);
    lista[i].narty = prompt("Podaj liczbę sztuk:",lista2[i].narty);
    if(lista[i].nazwa===null || lista[i].nazwa==="") lista[i].nazwa = lista2[i].nazwa;
    if(lista[i].sponsor===null || lista[i].sponsor==="") lista[i].sponsor = lista2[i].sponsor;
    if(lista[i].kolor===null || lista[i].kolor==="") lista[i].kolor = lista2[i].kolor;
    if(lista[i].narty===null || lista[i].narty==="") lista[i].narty = lista2[i].narty;
    localStorage.setItem('lista', JSON.stringify(lista));
    pokazListe();

}
