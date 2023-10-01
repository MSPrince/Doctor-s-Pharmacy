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
createOfferList(bannerList, bannerContainer)

function createOfferList(list, container) {
    list.foreach(function (el) {
        let img = document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    })
}