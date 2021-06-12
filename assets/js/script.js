//Verificando as variáveis:
//Constante - o valor não muda:
const a = 1;
//Variável - o valor muda - escopo global:
var b = 1;
//Variável - o valor muda - escopo local:
let email = "felipe.cabral@email.com.br";

email = "cabral.felipe@email.com.br";

//Imprimindo o resultado:
//Concatenando:
console.log("O seu e-mail é:" + email);
//Através do `${}` - mais indicado:
console.log(`O seu e-mail é: ${email}`);

//Evento quando for clicado:
document.getElementById("btn-submit").addEventListener("click", (e) => {
  console.log("O botão foi clicado");
});

//Evento quando o mouse estiver sobre o formulário:
document.getElementById("form-login").addEventListener("mouseenter", (e) => {
  console.log("O mouse está sobre o formulário");
});

//Evento quando o mouse deixar o formulário:
document.querySelector("#form-login").addEventListener("mouseleave", (e) => {
  console.log("O mouse deixou está área");
});

//Recuperar informações enviadas em um formulário:
document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  //Criando um JSON com uma variável:
  let json = {
    email: email,
    password: password,
  };

  /*
  //Validação dos dados de entrada:
  if (!json.email) {
    console.error("O campo e-mail não foi preenchido");
  }
  elseif(!json.password){
    console.error("O campo password não foi preenchido!");
  }

/*
/*
  Imprimindo o JSON:
  console.log(json);

  Convertendo o JSON para uma string:
  let stringJSON = JSON.stringify(json);

  console.log(stringJSON);

  Convertendo a string para um JSON:
  let jsonParse = JSON.parse(stringJSON);

  console.log(jsonParse);
*/
});
