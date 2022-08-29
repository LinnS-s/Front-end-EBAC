
const form = document.getElementById('cadastro_form')

form.addEventListener('submit',ValidarCadastro);


function ValidarCadastro(event){

    // capturando os campos do formulario
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone")
    const cep = document.getElementById("cep")
    const ciddade = document.getElementById("cidade")
    const uf = document.getElementById("uf")
    const regexmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const RegexUf = /\b\w{2}\b/i;
    const regexName = /[A-z][ ][A-z]/
    const submit = document.getElementById("enviar")
    var contErro = 0;
  

    // validação do campo nome
        if(nome.value ==""){
            contErro += 1;
            document.getElementById('msg-erro').innerHTML = 'Verifique os campos em vermelho'
            document.getElementById("nome").style.borderColor="red";
            document.getElementById("erro-nome").innerHTML = "O campo não pode estar vazio"
            document.getElementById("erro-nome").style.color="red"

        } else if(regexName.test(nome.value)){
            event.preventDefault()
            document.getElementById('nome').style.borderColor = "green"
            document.getElementById('erro-nome').innerHTML = ""
            document.getElementById('erro-nome').style.color = "green"
        
        }
         else{
            document.getElementById('msg-erro').innerHTML = "Verifique os Campos em vermelho"
            document.getElementById("nome").style.borderColor="red";
            document.getElementById("erro-nome").innerHTML = "Digite um nome Valido"
            
        }

    // validação do campo email
        if(email.value ==""){
            contErro += 1
            document.getElementById('email').style.borderColor = "red"
            document.getElementById('erro-email').innerHTML = "O campo não pode estar vazio"

        } else if(regexmail.test(email.value) ){
            document.getElementById('email').style.borderColor = "green"
            document.getElementById('erro-email').innerHTML = "ok"
            document.getElementById('erro-email').style.color = "green"

        } else{
            document.getElementById('email').style.borderColor = "red"
            document.getElementById('erro-email').innerHTML = "Verifique o formato do email"
        }

         // validação do campo telefone
         if(telefone.value ==""){
            contErro += 1;
            document.getElementById("telefone").style.borderColor = "red"
            document.getElementById("erro-telefone").innerHTML = "O campo não pode estar vazio"
        } else{
            document.getElementById("telefone").style.borderColor = ""
            document.getElementById("erro-telefone").innerHTML = ""
        }

        // validação do campo cep
        if(cep.value ==""){
            contErro += 1;
            document.getElementById("cep").style.borderColor = "red"
            document.getElementById("erro-cep").innerHTML = "O campo não pode estar vazio"
        } else{
            document.getElementById("cep").style.borderColor = ""
            document.getElementById("erro-cep").innerHTML = ""
        }
          // validação do campo cidade
          if(ciddade.value ==""){
            contErro += 1;
            document.getElementById("cidade").style.borderColor = "red"
            document.getElementById("erro-cidade").innerHTML = "O campo não pode estar vazio"
        } else{
            document.getElementById("cidade").style.borderColor = ""
            document.getElementById("erro-cidade").innerHTML = ""
        }

         // validação do campo UF
         if(uf.value ==""){
            contErro += 1;
            event.preventDefault()
            document.getElementById("uf").style.borderColor = "red"
            document.getElementById("erro-uf").innerHTML = "O campo não pode estar vazio"

        } else if(RegexUf.test(uf.value)){
            document.getElementById("uf").style.borderColor = ""
            document.getElementById("erro-uf").innerHTML = "ok"
            document.getElementById('erro-uf').style.color="green"
        } else{
            event.preventDefault()
            document.getElementById('uf').style.borderColor='red'
            document.getElementById('erro-uf').innerHTML = "Revise a UF"
        }

        // desabilitar o envio do formulario

        
        if(contErro > 0){
            event.preventDefault()
        }

        
}
