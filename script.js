var listaDoares = [];

function addDoador(name, cpf, email, data, cep, rua, numero, complemento, bairro, cidade, estado){
    var novoDoador = {name: name, cpf: cpf, email: email, data: data, cep: cep, rua: rua, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, estado: estado};
    listaDoares.push(novoDoador);
    localStorage.setItem('listaDoares', JSON.stringify(listaDoares));
    renderDonateList();
}

function getListaDoares() {
    var listaStored = JSON.parse(localStorage.getItem('listaDoares'));
    listaDoares = listaStored || [];
}

function renderDonateList() {
    var donateListElement = document.getElementById('listaDoares');
    donateListElementListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement
  
    listaDoares.forEach(function (donate) {
      var listItem = document.createElement('li');
      //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
      listItem.innerHTML = '<span class="patient-name">' + patient.name + '</span> (Idade: ' + patient.age + ') <button class="delete-button" onclick="deletePatient(' + patient.id + ')">Excluir</button>';
      patientListElement.appendChild(listItem);
    });
  }

getListaDoares(); 

document.getElementById("doacao").addEventListener('submit', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById('nameInput');
    var cpfInput = document.getElementById('cpfInput');
    var emailInput = document.getElementById('emailInput');
    var dataInput = document.getElementById('dataInput');
    var cepInput = document.getElementById('cepInput');
    var ruaInput = document.getElementById('ruaInput');
    var numeroInput = document.getElementById('numeroInput');
    var complementoInput = document.getElementById('complementoInput');
    var bairroInput = document.getElementById('bairroInput');
    var cidadeInput = document.getElementById('cidadeInput');
    var estadoInput = document.getElementById('estadoInput');
    addDoador(nameInput.value, parseInt(cpfInput.value), emailInput.value, dataInput.value, parseInt(cepInput.value), ruaInput.value, parseInt(numeroInput.value), complementoInput.value, bairroInput.value, cidadeInput.value, estadoInput.value);
    nameInput = '';
    cpfInput = '';
    emailInput = '';
    dataInput = '';
    cepInput = '';
    ruaInput = '';
    numeroInput = '';
    complementoInput = '';
    bairroInput = '';
    cidadeInput = '';
    estadoInput = '';
});

