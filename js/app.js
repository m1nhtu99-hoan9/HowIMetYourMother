Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ],
  controls: true,
  progress: true,
  defaultTiming: 60,
  mouseWheel: true
});

function calcDuration() {
  var startDate = new Date(2017, 02, 26, 0, 0, 0);
  var now = new Date();
  var secondsDiff = Math.round((now - startDate) / (1000));
  var minutesDiff = Math.round((now - startDate) / (1000*60));
  var hoursDiff = Math.round((now - startDate) / (1000*60*60));
  var daysDiff = Math.round((now - startDate) / (1000*60*60*24));
  var nextAnniversary = (daysDiff - (daysDiff % 100) + 100);
  var nextDate = new Date(startDate.getTime() + nextAnniversary*24*60*60*1000);
  
  document.getElementById("secondsDiff").innerHTML = secondsDiff;
  document.getElementById("hoursDiff").innerHTML = hoursDiff;
  document.getElementById("minutesDiff").innerHTML = minutesDiff;
  document.getElementById("daysDiff").innerHTML = daysDiff;
  document.getElementById("nextAnniversary").innerHTML = nextAnniversary;
  document.getElementById("nextDate").innerHTML = nextDate.toDateString();
}

setInterval(calcDuration, 1000);

