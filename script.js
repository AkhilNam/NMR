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

  displayScript.innerHTML = "Okay we are looking for a doctor. We will notify you soon";
}


var factList = [
  "People of all age groups, regions and countries are affected by NCDs.",
  "77% of all NCD deaths are in low- and middle-income countries",
  "Cardiovascular diseases account for most NCD deaths",
  "Lack of physical activity makes a person more prone to die to a NCD"
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
