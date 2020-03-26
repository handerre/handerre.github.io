function kastMedTerning() { //lager en funksjon med navn kastMedTerning
  var tilfaeldigt_tall = Math.floor((Math.random() * 6) + 1); //variablen tilfaeldig_tall = et tilfeldig tall mellom 1 og 6
  $('#terning3').text(tilfaeldigt_tall); //Hva fanden skjer her? - tror at tilfeldog tall vises som tekst i "felt" terning3
  
  var tilfaeldigt_tall1 = Math.floor((Math.random() * 6) + 1); //variablen tilfaeldig_tall1 = et tilfeldig tall mellom 1 og 6
  $('#terning2').text(tilfaeldigt_tall1); //Hva fanden skjer her? - tror at tilfeldog tall vises som tekst i "felt" terning2
            
  var sum_tall = ((tilfaeldigt_tall))+((tilfaeldigt_tall1)); //variablen sum_tall legger sammen tilfaeldig_tall og tilfaeldig_tall1
  $('#terning1').text(sum_tall); //Hva fanden skjer her? - tror at sum_tall vises som tekst i "felt" terning1
            
  var x = document.createElement("TABLE"); 
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);
        
  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);
        
  var z = document.createElement("TD");
  var t = document.createTextNode((sum_tall)); //
  z.appendChild(t);
  document.getElementById("myTr").appendChild(z);
  document.getElementById("#terning1").appendChild;
  }  
          
         
          
function slett(){
  document.getElementById("myTable").deleteRow(0);
  }
            
            function Poeng() {
              var kast = document.getElementById('TD');
             
            
              var _poeng = 0;
              kast.innerHTML = _poeng + ' poeng';
              document.body.appendChild(kast);
            
              kast.øk = function () {
                _poeng += 100;
                kast.innerHTML = _poeng + ' poeng';
              };
              kast.nullstill = function () {
                _poeng = 0;
                kast.innerHTML = _poeng + ' poeng';
              }
            }

              // function antall_kast() {
             // var teller = 0;

            //document.getElementById('antall_kast').innerHTML = ++teller;

           // }