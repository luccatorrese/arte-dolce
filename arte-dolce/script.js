// Récupération de l'élément qui va changer de couleur (shape 1)

const overlay = document.getElementById("product1-shape1");
const overlay1 = document.getElementById("product1-shape2");
const overlay2 = document.getElementById("product2-shape1");
const overlay3 = document.getElementById("product2-shape2");

// Ajout de la fonction changeColor à tous les éléments cliquables (color1)
var el1 = document.getElementsByClassName("color2");
for (var i = 0; i < el1.length; i++) {
  el1[i].onclick = changeColor2;
}

// Ajout de la fonction changeColor à tous les éléments cliquables (color)
var el = document.getElementsByClassName("color");
for (var j = 0; j < el.length; j++) {
  el[j].onclick = changeColor;
}

var el2 = document.getElementsByClassName("color3");
for (var k = 0; k < el2.length; k++) {
  el2[k].onclick = changeColor3;
}

var el3 = document.getElementsByClassName("color4");
for (var l = 0; l < el3.length; l++) {
  el3[l].onclick = changeColor4;
}

// définition de la fonction changeColor pour shape
function changeColor(e) {
  // Obtenir la couleur en format hexadécimal
  let hex = e.target.getAttribute("data-hex");
  // Définir la couleur hexadécimale pour shape
  overlay.style.fill = hex;
}

// définition de la fonction changeColor pour shape 1
function changeColor2(e) {
  // Obtenir la couleur en format hexadécimal
  let hex = e.target.getAttribute("data-hex");
  // Définir la couleur hexadécimale pour shape 1
  overlay1.style.fill = hex;
}

// définition de la fonction changeColor pour shape 1
function changeColor3(e) {
  // Obtenir la couleur en format hexadécimal
  let hex = e.target.getAttribute("data-hex");
  // Définir la couleur hexadécimale pour shape 1
  overlay2.style.fill = hex;
}

// définition de la fonction changeColor pour shape 1
function changeColor4(e) {
  // Obtenir la couleur en format hexadécimal
  let hex = e.target.getAttribute("data-hex");
  // Définir la couleur hexadécimale pour shape 1
  overlay3.style.fill = hex;
}

function toggleDivs() {
  var div1 = document.getElementById("container");
  var div2 = document.getElementById("container2");

  // Vérifie si div1 est actuellement visible
  if (div1.style.display !== "none") {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    div1.style.display = "block";
    div2.style.display = "none";
  }
}

// Animation Confetti

<script>
      function updateSlider(value) {
            animation.setSpeed(value / 100);
        }
      </script>
      <script>
        const animationContainer = document.getElementById('lottie');
        const animation = bodymovin.loadAnimation({
            container: document.getElementById("lottie"),
            path: "Confetti.json",
            renderer: "svg",
            loop: true,
            autoplay: true,
            name: "Animation Confetti",
        });
        animation.play();
        animation.addEventListener('DOMLoaded', () => {
          let a = document.getElementById("Fill1");
          a.style.fill = 'red';
        }

      </script>
                                   