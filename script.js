var listaDoadores = [];
var id = 1;

function addDoador(name, cpf, email, data, cep, rua, numero, complemento, bairro, cidade, estado){
    var novoDoador = {id: id++, name: name, cpf: cpf, email: email, data: data, cep: cep, rua: rua, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, estado: estado};
    listaDoadores.push(novoDoador);
    localStorage.setItem('listaDoadores', JSON.stringify(listaDoadores));
    criarListaDoadores();
}

function getListaDoadores() {
  var storedList = JSON.parse(localStorage.getItem('listaDoadores')); 
  listaDoadores = storedList || []; 
}

function criarListaDoadores() {
  var listaDoadoresElement = document.getElementById('listaDoadores');
  listaDoadoresElement.innerHTML = '';

  listaDoadores.forEach(function (doador) {
    var listItem = document.createElement('li');
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    var dataFormatada = (dia < 10 ? '0' : '') + dia + '/' + (mes< 10 ? '0' : '') + mes + '/' + ano;
    listItem.innerHTML = '<span class="data">' + dataFormatada + '</span> <span class="doador-name">' + doador.name + '</span> (E-mail: ' + doador.email + ')<span class="delete-button" onclick="excluiDoador(' + doador.id + ')">\u00D7</button>';
    listaDoadoresElement.appendChild(listItem);
  });
}

getListaDoadores()

criarListaDoadores()

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
    addDoador(nameInput.value, cpfInput.value, emailInput.value, dataInput.value, cepInput.value, ruaInput.value, numeroInput.value, complementoInput.value, bairroInput.value, cidadeInput.value, estadoInput.value);
    nameInput.value = '';
    cpfInput.value = '';
    emailInput.value = '';
    dataInput.value = '';
    cepInput.value = '';
    ruaInput.value = '';
    numeroInput.value = '';
    complementoInput.value = '';
    bairroInput.value = '';
    cidadeInput.value = '';
    estadoInput.value = '';
});

function excluiDoador(doadorId) {
  var listaDoadoresAtual = listaDoadores.filter(function (doador) {
    return doador.id !== doadorId;
  });

  if(listaDoadoresAtual < listaDoadores.length) {
    listaDoadores = listaDoadoresAtual;
    localStorage.setItem('listaDoadores', JSON.stringify(listaDoadores));
    criarListaDoadores()
  } else {
    alert('Doador não encontrado');
  }
}

function deleteAll() {
  localStorage.clear();
  getListaDoadores();
  criarListaDoadores();
}





