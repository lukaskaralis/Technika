

//TANKAI
// Define the tanks with their names and image sources
const tanks = [
    {name: "M1A1", imgSrc: ["Foto/Tankai/Amerikieciu/Abrams/1.jpg", "Foto/Tankai/Amerikieciu/Abrams/2.jpg", "Foto/Tankai/Amerikieciu/Abrams/3.jpg"], link: "common_link.html"},
    {name: "T-90", imgSrc: ["Foto/Tankai/Rusijos/T90/1.jpg", "Foto/Tankai/Rusijos/T90/2.jpg", "Foto/Tankai/Rusijos/T90/3.jpg"], link: "common_link.html"},
    {name: "Leopard 2A5", imgSrc: ["Foto/Tankai/Vokieciu/Leopard 2a5/1.jpg", "Foto/Tankai/Vokieciu/Leopard 2a5/2.jpg", "Foto/Tankai/Vokieciu/Leopard 2a5/3.jpg"], link: "common_link.html"},
    {name: "Leclerc", imgSrc: ["Foto/Tankai/Prancuzijos/Leclerc/1.jpg", "Foto/Tankai/Prancuzijos/Leclerc/2.jpg", "Foto/Tankai/Prancuzijos/Leclerc/3.jpg"], link: "common_link.html"}
];


// Randomize the tank images and positions
const randomizedTanks = tanks.map(tank => {
    return {name: tank.name, imgSrc: Array.isArray(tank.imgSrc) ? tank.imgSrc[Math.floor(Math.random() * tank.imgSrc.length)] : tank.imgSrc};
});

// Shuffle the tanks for random order
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Shuffle the tank positions for random order
const shuffledTanks = shuffleArray(randomizedTanks);

// Place the shuffled tanks on the page
document.addEventListener("DOMContentLoaded", function() {
    shuffledTanks.forEach((tank, index) => {
        const tankImage = document.getElementById(`tank${index + 1}`);
        tankImage.src = tank.imgSrc;

        const tankName = document.getElementById(`tankName${index + 1}`);
        tankName.textContent = tank.name;
    });
});
// Helicopter data
const helicopters = [
    {name: "Apache", imgSrc: ["Foto/Sraigtasparniai/Amerikieciu/Apache/1.jpg", "Foto/Sraigtasparniai/Amerikieciu/Apache/2.jpg", "Foto/Sraigtasparniai/Amerikieciu/Apache/3.jpg"], link: "common_link.html"},
    {name: "MI-24", imgSrc: ["Foto/Sraigtasparniai/Rusijos/Mi24/1.jpg", "Foto/Sraigtasparniai/Rusijos/Mi24/2.jpg", "Foto/Sraigtasparniai/Rusijos/Mi24/3.jpg"], link: "common_link.html"},
    {name: "Tiger", imgSrc: ["Foto/Sraigtasparniai/Vokieciu/Tiger/1.jpg", "Foto/Sraigtasparniai/Vokieciu/Tiger/2.jpg", "Foto/Sraigtasparniai/Vokieciu/Tiger/3.jpg"], link: "common_link.html"}
];

// Randomize the helicopter images and positions
const randomizedHelicopters = helicopters.map(helicopter => {
    return {name: helicopter.name, imgSrc: Array.isArray(helicopter.imgSrc) ? helicopter.imgSrc[Math.floor(Math.random() * helicopter.imgSrc.length)] : helicopter.imgSrc};
});

// Shuffle the helicopters for random order
const shuffledHelicopters = shuffleArray(randomizedHelicopters);

// Place the shuffled helicopters on the page
document.addEventListener("DOMContentLoaded", function() {
    shuffledHelicopters.forEach((helicopter, index) => {
        const helicopterImage = document.getElementById(`helicopter${index + 1}`);
        helicopterImage.src = helicopter.imgSrc;

        const helicopterName = document.getElementById(`helicopterName${index + 1}`);
        helicopterName.textContent = helicopter.name;
    });
});
// Artillery data
const artillery = [
    {name: "M777", imgSrc: ["Foto/Artilerija/Amerikieciu/M777/1.jpg", "Foto/Artilerija/Amerikieciu/M777/2.jpg", "Foto/Artilerija/Amerikieciu/M777/3.jpg"], link: "common_link.html"},
    {name: "Panzerhaubitze 2000", imgSrc: ["Foto/Artilerija/Vokietijos/2000/1.jpg", "Foto/Artilerija/Vokietijos/2000/2.jpg", "Foto/Artilerija/Vokietijos/2000/3.jpg"], link: "common_link.html"},
    {name: "BM-21", imgSrc: ["Foto/Artilerija/Rusijos/BM21/1.jpg", "Foto/Artilerija/Rusijos/BM21/2.jpg", "Foto/Artilerija/Rusijos/BM21/3.jpg"], link: "common_link.html"}
];

// Randomize the artillery images and positions
const randomizedArtillery = artillery.map(artilleryPiece => {
    return {name: artilleryPiece.name, imgSrc: Array.isArray(artilleryPiece.imgSrc) ? artilleryPiece.imgSrc[Math.floor(Math.random() * artilleryPiece.imgSrc.length)] : artilleryPiece.imgSrc};
});

// Shuffle the artillery for random order
const shuffledArtillery = shuffleArray(randomizedArtillery);

// Place the shuffled artillery on the page
document.addEventListener("DOMContentLoaded", function() {
    shuffledArtillery.forEach((artilleryPiece, index) => {
        const artilleryImage = document.getElementById(`artillery${index + 1}`);
        artilleryImage.src = artilleryPiece.imgSrc;

        const artilleryName = document.getElementById(`artilleryName${index + 1}`);
        artilleryName.textContent = artilleryPiece.name;
    });
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  $(document).ready(function(){
    $(".dropbtn").click(function(){
        $(this).next(".dropdown-content").toggle();
    });

    $(".sub-dropbtn").click(function(){
        $(this).next(".sub-dropdown-content").toggle();
    });
});
