<!DOCTYPE html> <!-- Holder med referanse i hht HTML5 standard -->
<html lang="no">
<head>
    <meta name="author" content="#">
    <meta charset="UTF-8">

<title>Startsiden</title> <!-- Tittel på HTML filen min i nettleservinduet-->

<!-- Koblingen til .css filen (stilarket) mitt -->
<link href="minstil.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1">


</head>

<body>

<main>
    <div class="meny_topp">
        <button type="button" class="button button-grey">Hjem</button>
        <button type="button" class="button button-grey"><a href="http://www.youtube.com/channel/UCFB7G96aSKQjiRxnOyjffuQ"target="_blank">Youtube video</a></button>
        <button type="button" class="button button-grey"><a href="https://www.w3schools.com/html/default.asp"target="_blank">HTML</a></button>
        <button type="button" class="button button-grey"><a href="https://www.w3schools.com/css/default.asp"target="_blank">CSS</a></button>
        <button type="button" class="button button-grey"><a href="https://www.w3schools.com/sql/default.asp"target="_blank">SQL</a></button>
        <button type="button" class="btn btn-defult"><a href="https://www.w3schools.com/php/default.asp"target="_blank">PHP</a></button>
        <button type="button" class="button button-grey"><a href="https://www.w3schools.com/python/default.asp" target="_blank">Python</a></button>
        <button type="button" class="button button-grey"><a href="https://www.w3schools.com/js/default.asp" target="_blank">JavaScript</a></button>
    
        <div id="nedtelling"> 
        
            <script>
                // Set the date we're counting down to
                var countDownDate = new Date("Jun 19, 2020 15:00:00").getTime();
                
                // Update the count down every 1 second
                var x = setInterval(function() {
                
                  // Get today's date and time
                  var now = new Date().getTime();
                    
                  // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                    
                  // Time calculations for days, hours, minutes and seconds
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                  // Output the result in an element with id="demo"
                  document.getElementById("nedtelling").innerHTML = "Antall dager til sommerferien: "+ days + "d " + hours + "h "
                  + minutes + "m " + seconds + "s ";
                    
                  // If the count down is over, write some text 
                  if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("nedtelling").innerHTML = "EXPIRED";
                  }
                }, 1000);
                </script>
        </div>

    </div>

    <div class="header">
        <h1>NTNU_KURS_2019/2020</h1>
        
        </div>
    
    
    <div class="meny_venstre">
        <ol>
            <li>Om oss</li>
            <ul>
            <li><a href="Filer/omoss.html">Hvem er vi</a></li>
            <li><a href="Filer/Laereplan.html">Læreplan</a></li>
            </ul>
            <li>Digitale Escape room</li>
            <ul>
            <li><a href="https://escaperoomthegame.com/en-au/"target="_blank">The game </a></li>
            <li><a href="https://sites.google.com/site/digitalbreakouttemplate/home"target="_blank">Google forms escape </a></li>
            <li><a href=" https://escaperoomthegame.com/en-us/escape-room-the-game-virtual-reality/behind-enemy-lines/walkthrough"target="_blank">Behind enemy lines </a></li>     
            </ul>
            <li>Blokkprogrammering</li>
            <ul>
            <li><a href="https://makecode.microbit.org"target="_blank">Microbit</a></li>
            <li><a href="https://scratch.mit.edu"target="_blank">Scratch</a></li>
            </ul>
           
            <li>Våre digitale "spill"</li>
            <ul>
              <li><a href="Filer/Res_tabell.html">Digitale terninger</a></li>
              <li><a href="Filer/3D_terninger/Terning.html">3D terninger</a></li>
              </ul>
              <li>Utfordringer og tanker videre</li>
              <ul>
                <li><a href="Filer/Tanker_videre.html">Tanker videre</a></li>
                </ul>
          </ol>
        
    </div>
       
    
    <div class="hovedvindu">
        <b>Øving – Brukeropplevelse (UX):</b>
        <br>
        <br>
        Ta utgangspunkt i et nettsted du besøker ofte og svar på følgende oppgaver:
        <br>
        <br>
        1. Hva synes du om det visuelle uttrykket? Fargevalg, typografi og tekst, logo og bruk av bilder og grafikk er elementer som bør ligge til grunn for dine vurderinger.
        <br>
        <br>
        Jeg besøker &#128279;<a href="http://www.nrk.no"target="_blank">NRK</a> sine sider hver dag. De er relativt flinke til å ta hensyn til universell utforming.
        Derfor er fargevalg, typografi, logo, bilder og grafikk bra utformet. De har svart tekst på hvit bakgrunn, så kontrastene er bra. De har muligheter for søk og 
        en kan logge seg inn, om man har opprettet en bruker. 
        <br>
        <br>
        2. Gjennomfør en kort analyse av nettstedets brukskvalitet. Gi eksempler på gode og dårlige aspekter ved nettstedet, og kom gjerne med forslag til forbedringer. Analysen bør bygge på de seks prinsippene for brukskvalitet som nevnes i forelesningen om brukeropplevelse (presentasjonen er tilgjengelig på BB): synlighet, tilbakemelding, avgrensning, mapping, konsistens og affordance.
        <br>
        <br>
        Da jeg bruker NRK sine sider hver dag er jeg kanskje blitt litt "blind" for manglene, men i følge min "analyse", så vil jeg si at 
        sidene deres oppfyller alle krav i forhold til brukskvalitet. En fordel er er og at det ikke er reklame som "popper" opp.
        <br>
        Om jeg derimot skal påpeke noe jeg syntes er "plagsomt/kunne vært utformet bedre", så er det;  at filmer ofte avspilles atomatisk når jeg bruker leser på mobil. Dette vil 
        gjøre slik at jeg bruker mere mobildata enn ønsket. I tillegg så er noen artikler laget på en slik måte (vet ikke helt hvordan), men der er det mye bilder og lite tekst. 
        Du må ofte skrolle mye nedover for å få med hele artikkelen. Slike artikler lukker jeg igjen, om jeg ikke har spesiell interesse av det som står der.
        <br>
        <br>
        3. WCAG 2.0 er en teknisk standard for universell utforming på web. 
        <br>Velg ut tre krav fra standarden (&#128279; <a href="https://uu.difi.no/krav-og-regelverk/wcag-20-standarden" target = "blank">Krav og regelverk</a>). Oppfyller nettstedet disse kravene?
        <br>
        <br>
        Krav 1: Teksting på videoer. Nei, dette kravet oppfylles ikke konsekvent, bare noen ganger.
        <br>
        Krav 2: Styring av videoer/filmer med tastatur: Ja, dette kravet oppfylles.
        <br>
        Krav 3: Språkkoder: Ja dette kravet oppfylles da de bruker enten nb (norsk bokmål) 
        <br>
        eller nn (nynorsk) i sin html-kode på sidene (artiklene) sine.
        
    </div>

    <div class="footer">
        <p>Copyright &copy; 2020 Bent, Karin og Frode - Sist oppdatert
            <script>
              document.write(Date());
              </script>
    </div>
</main>

<!-- Slutt på body og HTML -->
</body>
</html>
