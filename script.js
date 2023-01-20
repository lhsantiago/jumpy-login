let elementosFormulario = document.querySelectorAll("input");
let verifier = document.querySelector("#verificarTodos");
var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

const validateForm = () => {
  let valid = true;

  Array.from(elementosFormulario).some((element) => {
    if(element.value.length === 0){
      checkFields(null, element);
      verifier.style.visibility = "visible";
      verifier.innerHTML = "Campos obrigatórios não registrados.";
      valid = false;
    }
  })
    if(valid) success();
}

let checkFields = (event = null, element = null) => {
  const target = event? event.target : element;
  if (target.value.trim().length === 0) fail(target);
  else cleanParagraph(target);
};


let fail = (element) => {
  var elementoSpan = element.parentNode.children[2];
  elementoSpan.innerHTML = "*Campo Obrigatório*";
  elementoSpan.style.visibility = "visible";
};


let success = () => {
  verifier.style.visibility = "visible";
  verifier.innerHTML = `<p class="success">Sucesso!</p>`;
  formulario.reset();
  reloadPage();
};


let cleanParagraph = (element) => {
  var elementP = element.parentNode.children[2];
  element.innerHTML = "";
  elementP.style.visibility = "hidden";
  verifier.style.visibility = "hidden";
  verifier.innerHTML = "";
};