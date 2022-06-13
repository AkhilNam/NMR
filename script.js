/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}


function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "NMR Facts displayed here...";
}


var factList = [
  "NMR is a technique used to analyze a molecule's structure.",
  "NMR Spectrometers are non destructive and less sample preparation is required, giving it an edge over electron microscopes and X-ray diffraction instruments",
  "Solid and Liquid samples can be used in NMR",
  "When two waves of equal frequencies collide, it causes resonance. This phenomenon is a major part of the NMR process"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
