
const form = document.querySelector('form');
emailField = form.querySelector('.email'),
    emailInput = emailField.querySelector('input'),
    passwordField = form.querySelector('.password'),
    passwordInput = passwordField.querySelector('input');

function checkEmail() { //funcao  que verifica o padrao de email.
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // padrao de emails validos.

    if (!emailInput.value.match(pattern)) {
        // Se o padrao de email nao e valido,  aciona a class de erro e removi a class de validacao.{
        emailField.classList.add('error');
        emailField.classList.remove("valid");

        let txtError = emailField.querySelector('.error-txt'); //Se o campo de email nao estiver vazio, mas com um padrao de email incorreto, mostra a sms o preencha o campo de email por favor.
        (emailInput.value == "") ? txtError.innerHTML = " Preencha o campo de email por favor ! " : txtError.innerHTML = "Introduza um email valido"
    }
    else { // Se o padrao esta correto entao remove a class de erro e a aciona a classe de validacao.
        emailField.classList.remove('error');
        emailField.classList.add('valid');

    }
}

function checkPassword() {
    // funcao que verifica a palavra passe.
    if (passwordInput.value == "") {
        // Se o campo de palavra passe estiver vazio aciona, a classe erro e remove a class de validacao.

        passwordField.classList.add('error');
        passwordField.classList.remove("valid");
    } else {
        // Se o campo de palavra passe estiver vazio remove a class de erro e aciona a classe de validacao
        passwordField.classList.remove('error');
        passwordField.classList.add('valid')

    }

    // Se o campo de email e password nao contem a class de erro isto significa que o usuario preencheu corretamente os campos

    if (!emailField.classList.contains('erro') && !passwordField.classList.contains('erro')) {
        window.location.href = form.getAttribute("action");
        // redireciona o usuario a url especifica que esta dentro do atributo action do formulario
    }
}

form.onsubmit = (e) => {
    e.preventDefault();//Previne o formulario de auto enviar os dados.
    (emailInput.value == "") ? emailField.classList.add("error") : checkEmail();
    (passwordInput.value == "") ? passwordField.classList.add("error") : checkPassword();

}

// chamar a funcao que verifica o email ao inserir o email pelo teclado
emailInput.onkeyup = () => { checkEmail(); }

// chamar a funcao que verifica a password ao inserir o email pelo teclado
passwordInput.onkeyup = () => {
    checkPassword();
}