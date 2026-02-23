// Payment links — replace with real Wise links when ready
var links = {
    GBP: "#placeholder-gbp",
    USD: "#placeholder-usd",
    CAD: "#placeholder-cad"
};

document.getElementById("link-gbp").href = links.GBP;
document.getElementById("link-usd").href = links.USD;
document.getElementById("link-cad").href = links.CAD;

function showCurrencies() {
    document.getElementById("contribute-step").style.display = "none";
    document.getElementById("currency-step").style.display = "block";
}

function showContribute() {
    document.getElementById("currency-step").style.display = "none";
    document.getElementById("contribute-step").style.display = "block";
}
