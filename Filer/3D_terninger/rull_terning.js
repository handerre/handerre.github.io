function rollDice(e) {
    var prev = Number(e.className.substring(e.className.length - 1));
    var next = Math.floor(Math.random()*6) + 1;
    var c = 'roll-' + prev + '-to-' + next;
    var label = document.getElementById("rolling-class");
    e.className = 'cube w-transition ' + c;
    label.innerHTML = 'Terning 1<br>';
    var d = document.getElementById("rolling-dice");
    d.className = 'dice rolling';
    setTimeout(function () { d.className = 'dice'; }, 2000);

  
}

function rollDice2(e) {
    var prev = Number(e.className.substring(e.className.length - 1));
    var next = Math.floor(Math.random()*6) + 1;
    var c = 'roll-' + prev + '-to-' + next;
    var label = document.getElementById("rolling-class");
    e.className = 'cube w-transition ' + c;
    label.innerHTML = 'Terning 2<br>' ;
    var d = document.getElementById("rolling-dice");
    d.className = 'dice rolling';
    setTimeout(function () { d.className = 'dice';  }, 2000);
}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
    ga('require', 'displayfeatures');
    ga('send', 'pageview');

