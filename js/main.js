//  --------------------------------------------banner section start------------------------------------------->>
let bannerList = [
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

let bannerContainer = document.querySelector(".banner");
createOfferList(bannerList, bannerContainer);
function createOfferList(list, container) {
    list.forEach(function (el) { // Use 'forEach' instead of 'foreach'
        let img = document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    });
}

//  --------------------------------------------banner section End--------------------------------------------->>





// ---------------------------------------new Launches Start----------------------------------->>
let newLaunchesList = [
    {
        name: "Kotex Overnight Period Panties - Medium / Large Size, Pack Of 2 Panties",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W66447/kotex-overnight-period-panties-medium-large-size-pack-of-2-panties-2-1652778799.jpg?dim=1024x0",
        mrp: 95,
        discount: 15,
    },
    {
        name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck, Back & Shoulder Pain - Small",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
        mrp: 999,
        discount: 50,
    },
    {
        name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
        mrp: 149,
        discount: 5,
    },
    {
        name: "Manforce Epic Desire Super Thin Premium Condoms, Silk Chocolate Flavor, Disposable Pouch (3 Counts)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G89746/manforce-epic-desire-super-thin-premium-condoms-silk-chocolate-flavor-disposable-pouch-3-counts-6.1-1652957426.jpg?dim=1024x0",
        mrp: 80,
        discount: 15,
    },
    {
        name: "Kellogg'S Froot Loops Original 285g Box",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
        mrp: 185,
        discount: 0,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
    {
        name: "Keto-Diastix Reagent Strip For Urinalysis",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/A90444/keto-diastix-reagent-strip-for-urinalysis-2-1671745091.jpg?dim=1440x0",
        mrp: 240,
        discount: 25,
    },
    {
        name: "Melalumin Lip Lightener 10gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E38954/melalumin-lip-lightener-10gm-1.1-1671743355.jpg?dim=700x0&dpr=1&q=100",
        mrp: 240,
        discount: 25,
    },
];


let newLanchesContainer = document.querySelector(".new-launches > .product-cards");
createProductList(newLaunchesList, newLanchesContainer); // Corrected function name

function createProductList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let mrp = document.createElement("p");
        let price = document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        name.setAttribute("class", "name");
        mrp.innerHTML = "MRP <span>₹" + el.mrp + "</span>";
        let p = (el.mrp * (100 - el.discount)) / 100; // Corrected calculation
        p = (Math.round(p * 100) / 100).toFixed(2);
        price.innerHTML = "₹" + p + "<span>" + " ( " + el.discount +"%" +")";
        div2.append(name, mrp, price);
        div.append(img, div2);
        container.append(div);
    });
}
// --/ ---------------------------------------new Launches End----------------------------------->>




// --------------------------------------trending near you Start---------------------------------------->>>

let trendingProdList = [
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 5,
    },
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 5,
    },
    {
        name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=320x320&dpr=1&q=100",
        mrp: 399,
        discount: 48,
    },
    {
        name: "Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1024x0",
        mrp: 840,
        discount: 24,
    },
    {
        name: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg?dim=1024x0",
        mrp: 194.6,
        discount: 7,
    },
    {
        name: "Liveasy Essentials Copper Bottle - Ayurvedic Health Benefits - Leak Proof Cap - 950ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W00450/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-950ml-1-1641793079.jpg?dim=1024x0",
        mrp: 1100,
        discount: 30,
    },
    {
        name: "Vicks Vaporub 25ml, Relief From Cold, Cough, Headache And Body Pain",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1654078746.jpg?dim=1024x0",
        mrp: 85,
        discount: 11,
    },
];

let trendingContainer = document.querySelector(".trending > .product-cards");
createProductList(trendingProdList, trendingContainer);
// --------------------------------------trending near you End---------------------------------------->>>




// -----------------------------------------------freq booked lab test Start-------------------------------------------------------->>

let freqBookedLabTestList = [
    {
        discount: 60,
        name: "Post Pradndial Blood Sugar (PPBS)",
        description: "Measure your blood sugar levels after last meal",
        mrp: 500,
        price: 199,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/b4682c3fb22d39479c6d7a4a481e5ae5.png?dim=96x0",
    },
    {
        discount: 64,
        name: "Comprehensive Full Body Checkup with Vitamin D & B12",
        description:
            "Measure Vitamin D & B12 levels and other essential parameters",
        mrp: 4199,
        price: 1499,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/9fc5a0ab225a3ca2bc1702149e07f311.png?dim=96x0",
    },
    {
        discount: 71,
        name: "Random Blood Sugar (RBS)",
        description: "Testing of the blood sugar level at any time of the day",
        mrp: 350,
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/1d842b1450b53455922a5b6de3a3a980.png?dim=96x0",
    },
    {
        discount: "PSP-D",
        name: "",
        description:
            "To assess the renal function for early detection of any kidney disease",
        mrp: "",
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/d0c1ca33ee2637239dfed1645ed02aa8.png?dim=96x0",
    },
];

let freqBookedLabTestContainer = document.querySelector(".freq-booked-lab-tests .product-banner");
createProductBannerList(freqBookedLabTestList, freqBookedLabTestContainer);

function createProductBannerList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let discount = document.createElement("h4");
        let description = document.createElement("p");
        let price = document.createElement("h4");

        if (typeof el.discount === "number") { // Fixed the if condition
            discount.innerText = el.discount + "% OFF";
            price.innerHTML = "<span>₹" + el.mrp + "</span><br>₹" + el.price; // Fixed this line
        } else {
            discount.innerText = el.discount;
            discount.setAttribute("class", "no-discount"); // Fixed the class attribute
            price.innerHTML = "₹" + el.price;
        }

        name.innerText = el.name;
        description.innerText = el.description;
        img.setAttribute("src", el.imgUrl);
        div2.append(price, img); // Fixed the method name
        div.append(discount, name, description, div2); // Fixed the method name
        container.append(div);
  
    });
}
// -----------------------------------------------freq booked lab test End----------------------------------------------------------->>



// -----------------------------------------------------------Payment Offers Section Start--------------------------------------------------------------------->>>
let paymentOfferList = [
    {
        name: "Amazon Pay",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/1412bb76dee-AMAZONPAY.jpg?dim=1440x0",
    },
    {
        name: "Paytm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/bb9b358232d-PAYTM-02.jpg?dim=1440x0",
    },
    {
        name: "MobiKwik",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/2a0795e595e-MOBIKWIK.jpg?dim=1440x0",
    },
    {
        name: "Ola Money",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a20dea5ddad-OLA-MONEY-02.jpg?dim=1024x0",
    },
    {
        name: "Freecharge",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e1bf5c7dae5-FREECHARGE-02.jpg?dim=1024x0",
    },
    {
        name: "Airtel Payment",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1024x0",
    },
];

let paymentOfferContainer = document.querySelector(".payment-offers > div");

// Call the createOfferList function with the correct variable name
createOfferList(paymentOfferList, paymentOfferContainer);

function createOfferList(list, container) {
    list.forEach(function (el) {
        let img = document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    });
}

// -----------------------------------------------------------Payment Offers Section End--------------------------------------------------------------------->>>


/* < !------------------------------------------------------------welnes essential start----------------------------------------------------------> */
let wellnessEssentialsList = [
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },

    {
        name: "Neurobin Forte Tablet 30's",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1024x0",
        mrp: 34.7,
        discount: 10,
    },
    {
        name: "Gas O Fast Active Jeera Axtacid Sachet Of 5 G",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I34550/gas-o-fast-active-jeera-antacid-sachet-of-5-g-2-1654166983.jpg?dim=1024x0",
        mrp: 10,
        discount: 15,
    },
    {
        name: "Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 15,
    },
    {
        name: "Electral Powder 21.80gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/065285/electral-powder-2180gm-2-1653986181.jpg?dim=1024x0",
        mrp: 21.05,
        discount: 15,
    },
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=1024x0",
        mrp: 54,
        discount: 5,
    },
];

let wellnessEssentialsContainer = document.querySelector(".wellness-essentials > .product-cards2");
createProductList(wellnessEssentialsList, wellnessEssentialsContainer);
/* < !------------------------------------------------------------welnes essential end----------------------------------------------------------> */