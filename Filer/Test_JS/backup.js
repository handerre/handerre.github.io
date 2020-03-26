var tilfaeldigt_tall;
        
          var elKnap = document.getElementById('knapp2'); // Innleser button elementet fra HTML
          
          elKnap.addEventListener('click', kastMedTerning, false); // Her tilføyes en "klikk" event listener til knappen,
          //som kaller kastMedTerning funktionen på klikk 
        
          function kastMedTerning() {
        
          var tilfaeldigt_tall = Math.floor((Math.random() * 6) + 1); 
          $('#terning3').text(tilfaeldigt_tall); 
          var tilfaeldigt_tall1 = Math.floor((Math.random() * 6) + 1); 
            $('#terning2').text(tilfaeldigt_tall1); 
            
          var sum_tall = ((tilfaeldigt_tall))+((tilfaeldigt_tall1)); 
            $('#terning1').text(sum_tall); 
            
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
         
          
           // function antall_kast() {
             // var teller = 0;

            //document.getElementById('antall_kast').innerHTML = ++teller;

           // }
          
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