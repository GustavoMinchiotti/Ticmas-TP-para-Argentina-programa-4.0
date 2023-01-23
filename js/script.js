//? capturo el bootstrap icon para cambiar el color de decorado ///////////////////

document.getElementById("n1").addEventListener("click", function () {
  document.getElementById("colorOscuro").style.backgroundColor = "#09402c";
  document.getElementById("colorHeader").style.backgroundColor = "#09402c";

  //? fuentes..
  document.getElementById("colorOscuro").style.color = "#f2f2f2";
  document.getElementById("colorHeader").style.color = "#f2f2f2";

  document.getElementById("whaText").style.color = "#f2f2f2";
  document.getElementById("sobreText").style.color = "#f2f2f2";
  document.getElementById("mapText").style.color = "#f2f2f2";
  document.getElementById("linkText").style.color = "#f2f2f2";
  document.getElementById("gitText").style.color = "#f2f2f2";
  document.getElementById("hr1").style.borderColor = "#f2f2f2";
  document.getElementById("hr2").style.borderColor = "#f2f2f2";
  document.getElementById("hr3").style.borderColor = "#f2f2f2";
  document.getElementById("hr4").style.borderColor = "#f2f2f2";
  document.getElementById("hr5").style.borderColor = "#f2f2f2";
});

document.getElementById("n2").addEventListener("click", function () {
  document.getElementById("colorOscuro").style.backgroundColor = "#590212";
  document.getElementById("colorHeader").style.backgroundColor = "#590212";

  //? fuentes..
  document.getElementById("colorOscuro").style.color = "#f2f2f2";
  document.getElementById("colorHeader").style.color = "#f2f2f2";

  document.getElementById("whaText").style.color = "#f2f2f2";
  document.getElementById("sobreText").style.color = "#f2f2f2";
  document.getElementById("mapText").style.color = "#f2f2f2";
  document.getElementById("linkText").style.color = "#f2f2f2";
  document.getElementById("gitText").style.color = "#f2f2f2";
  document.getElementById("hr1").style.borderColor = "#f2f2f2";
  document.getElementById("hr2").style.borderColor = "#f2f2f2";
  document.getElementById("hr3").style.borderColor = "#f2f2f2";
  document.getElementById("hr4").style.borderColor = "#f2f2f2";
  document.getElementById("hr5").style.borderColor = "#f2f2f2";
});

document.getElementById("n3").addEventListener("click", function () {
  document.getElementById("colorOscuro").style.backgroundColor = "#10365a";
  document.getElementById("colorHeader").style.backgroundColor = "#10365a";

  //? fuentes..
  document.getElementById("colorOscuro").style.color = "#f2f2f2";
  document.getElementById("colorHeader").style.color = "#f2f2f2";

  document.getElementById("whaText").style.color = "#f2f2f2";
  document.getElementById("sobreText").style.color = "#f2f2f2";
  document.getElementById("mapText").style.color = "#f2f2f2";
  document.getElementById("linkText").style.color = "#f2f2f2";
  document.getElementById("gitText").style.color = "#f2f2f2";
  document.getElementById("hr1").style.borderColor = "#f2f2f2";
  document.getElementById("hr2").style.borderColor = "#f2f2f2";
  document.getElementById("hr3").style.borderColor = "#f2f2f2";
  document.getElementById("hr4").style.borderColor = "#f2f2f2";
  document.getElementById("hr5").style.borderColor = "#f2f2f2";
});

document.getElementById("n5").addEventListener("click", function () {
  document.getElementById("colorOscuro").style.backgroundColor = "#2c2c2c";
  document.getElementById("colorHeader").style.backgroundColor = "#2c2c2c";

  //? fuentes..
  document.getElementById("colorOscuro").style.color = "#f2f2f2";
  document.getElementById("colorHeader").style.color = "#f2f2f2";

  document.getElementById("whaText").style.color = "#f2f2f2";
  document.getElementById("sobreText").style.color = "#f2f2f2";
  document.getElementById("mapText").style.color = "#f2f2f2";
  document.getElementById("linkText").style.color = "#f2f2f2";
  document.getElementById("gitText").style.color = "#f2f2f2";
  document.getElementById("hr1").style.borderColor = "#f2f2f2";
  document.getElementById("hr2").style.borderColor = "#f2f2f2";
  document.getElementById("hr3").style.borderColor = "#f2f2f2";
  document.getElementById("hr4").style.borderColor = "#f2f2f2";
  document.getElementById("hr5").style.borderColor = "#f2f2f2";
});

//! color naranja claro ------------------------////////////////
document.getElementById("n4").addEventListener("click", function () {
  document.getElementById("colorOscuro").style.backgroundColor = "#FFD085";
  document.getElementById("colorHeader").style.backgroundColor = "#FFD085";

  //? fuentes..
  document.getElementById("colorOscuro").style.color = "#2c2c2c";
  document.getElementById("colorHeader").style.color = "#2c2c2c";

  document.getElementById("whaText").style.color = "#2c2c2c";
  document.getElementById("sobreText").style.color = "#2c2c2c";
  document.getElementById("mapText").style.color = "#2c2c2c";
  document.getElementById("linkText").style.color = "#2c2c2c";
  document.getElementById("gitText").style.color = "#2c2c2c";
  document.getElementById("hr1").style.borderColor = "#2c2c2c";
  document.getElementById("hr2").style.borderColor = "#2c2c2c";
  document.getElementById("hr3").style.borderColor = "#2c2c2c";
  document.getElementById("hr4").style.borderColor = "#2c2c2c";
  document.getElementById("hr5").style.borderColor = "#2c2c2c";
});

//mouseover es equivalente a hover

//? de esta manera capture un color porque las variables sass ($oscuro) no son compatibles con js
// document.getElementById("whaText").addEventListener("mouseout", function () {
//   let elemento = document.getElementById("colorClaro");
//   let elementSt = window.getComputedStyle(elemento);
//   let elColor = elementSt.getPropertyValue("backgroundColor");
//   console.log("elColor");
//   document.getElementById("whatsappButton").style.backgroundColor = elColor;
// });


//? ---------------------------light dark theme-----------------------------------
function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == './css/style.css') { 
        theme.setAttribute('href', './css/style-dark.css'); 
    } else { 
        theme.setAttribute('href', './css/style.css'); 
    } 
} 