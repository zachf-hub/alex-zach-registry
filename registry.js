// Registry items - replace "link" values with real Wise links later
// Each item has links per currency: { GBP: "...", USD: "...", CAD: "..." }
var items = [
    {
        name: "Le Creuset Dutch Oven",
        description: "A kitchen staple we'll use for years to come.",
        photo: null,
        prices: { GBP: 260, USD: 330, CAD: 450 },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    },
    {
        name: "Dyson V15 Vacuum",
        description: "Keeping our place spotless, together.",
        photo: null,
        prices: { GBP: 530, USD: 650, CAD: 900 },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    },
    {
        name: "Linen Bedding Set",
        description: "Soft, breathable sheets for our first home.",
        photo: null,
        prices: { GBP: 180, USD: 220, CAD: 300 },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    },
    {
        name: "KitchenAid Stand Mixer",
        description: "For all the baking adventures ahead.",
        photo: null,
        prices: { GBP: 350, USD: 430, CAD: 580 },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    },
    {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories.",
        photo: null,
        prices: { GBP: null, USD: null, CAD: null },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    },
    {
        name: "Nespresso Machine",
        description: "Morning coffee, every morning.",
        photo: null,
        prices: { GBP: 200, USD: 250, CAD: 340 },
        links: {
            GBP: "#placeholder-gbp",
            USD: "#placeholder-usd",
            CAD: "#placeholder-cad"
        }
    }
];

var currencySymbols = { GBP: "\u00A3", USD: "$", CAD: "C$" };

function renderItems(currency) {
    var container = document.getElementById("registry");
    container.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var card = document.createElement("div");
        card.className = "item-card";

        // Photo area
        var photoDiv = document.createElement("div");
        photoDiv.className = "item-photo";
        if (item.photo) {
            var img = document.createElement("img");
            img.src = item.photo;
            img.alt = item.name;
            photoDiv.appendChild(img);
        } else {
            photoDiv.textContent = "Photo coming soon";
        }
        card.appendChild(photoDiv);

        // Info area
        var info = document.createElement("div");
        info.className = "item-info";

        var h3 = document.createElement("h3");
        h3.textContent = item.name;
        info.appendChild(h3);

        // Price
        var price = item.prices[currency];
        var priceEl = document.createElement("div");
        priceEl.className = "price";
        if (price !== null) {
            priceEl.textContent = currencySymbols[currency] + price;
        } else {
            priceEl.textContent = "Any amount appreciated";
        }
        info.appendChild(priceEl);

        // Description
        var desc = document.createElement("div");
        desc.className = "description";
        desc.textContent = item.description;
        info.appendChild(desc);

        // Link
        var link = item.links[currency];
        if (link) {
            var a = document.createElement("a");
            a.className = "gift-link";
            a.href = link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = "Gift This";
            info.appendChild(a);
        }

        card.appendChild(info);
        container.appendChild(card);
    }
}

// Currency selector logic
var select = document.getElementById("currency-select");
var notice = document.getElementById("currency-notice");

select.addEventListener("change", function () {
    var val = select.value;
    if (val === "other") {
        notice.style.display = "block";
        // Still show items in GBP as default view
        renderItems("GBP");
    } else {
        notice.style.display = "none";
        renderItems(val);
    }
});

// Initial render
renderItems("GBP");
