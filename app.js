const vowels = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

function asignarTextoPorId (id, texto) {
  const elementoHTML = document.getElementById(id);
  elementoHTML.innerHTML = texto;
  return;
}

function toggleDisplay (id, display) {
  const elementoHTML = document.getElementById(id);
  elementoHTML.style.display = display;
  return;
}

function changeColor (id, color) {
  const elementoHTML = document.getElementById(id);
  elementoHTML.style.color = color;
  return;
}

function mostrarBoton (id) {
  const button = document.getElementById(id);
  button.removeAttribute("hidden");
  return;
}

function tieneAcentos (text) {
  let regex = /[áéíóúÁÉÍÓÚ]/;
  if (regex.test(text)) {
    return true;
  }
  return false;
}

function tieneMayusculas (text) {
  let regex = /[A-Z]/;
  if (regex.test(text)) {
    return true;
  }
  return false;
}

function copiar () {
  const texto = document.querySelector("#response");
  navigator.clipboard.writeText(texto.innerHTML);
  return;
}

function encriptar () {
  let text = document.querySelector("#input").value;
  
  if (tieneAcentos(text) || tieneMayusculas(text)) {
    changeColor("info", "red");
    return;
  } else if (text === "") {
    return;
  }

  changeColor("info", "#495057");
  toggleDisplay("img_output", "none");

  text = text.replace(/[aeiou]/g, match => vowels[match]);

  asignarTextoPorId("response", text);
  mostrarBoton("btn_copiar");
  document.querySelector(".container_output").style.justifyContent = "space-between";
  return;
}

function desencriptar () {
  let text = document.querySelector("#input").value;
  
  if (tieneAcentos(text) || tieneMayusculas(text)) {
    changeColor("info", "red");
    return;
  } else if (text === "") {
    return;
  }

  changeColor("info", "#495057");
  toggleDisplay("img_output", "none");

  const valores = Object.values(vowels);
  
  valores.forEach(valor => {
    if (text.includes(valor)) {
      const regex = new RegExp(valor, 'g');
      text = text.replace(regex, Object.keys(vowels).find(key => vowels[key] === valor));
    }
  });

  asignarTextoPorId("response", text);
  mostrarBoton("btn_copiar");
  document.querySelector(".container_output").style.justifyContent = "space-between";
  return;
}