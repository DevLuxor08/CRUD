//Vamos utilizar essa variavel para criar um Obejto (Orientado Objeto)
// Vamos utilizar um vetor || Vetor é uma variavel com varias informações
let sites = [
    {
        "id":1,
        "nome": "Lucas ",
        "endereco": "https://github.com/DevLuxor08"
    },
    {
        "id":2,
        "nome": "Pedro",
        "endereco": "https://www.instagram.com/devluxor/"
    },
];
// Criado uma função que nao tem parametros
function exibirVetor (){
    console.log(sites);
}
exibirVetor();  
let editandoId = null;
// A variavel form esta indo no documento HTML e e buscando pelo ID 'Site-form'
const nomeInput = document.getElementById('nome'); 
const form = document.getElementById('site-form'); 
const enderecoInput = document.getElementById('endereco');
const siteIdInput = document.getElementById('site-id');
const submitBnt = document.getElementById('submit-bnt');
const cancelarBnt = document.getElementById('cancelar-bnt');
const formTitle = document.getElementById('form-title');
const tabelaBody = document.getElementById('sites-body');
//Criando uma função que sempre acrescenta
function renderizarTabela(){
    tabelaBody.innerHTML = '';
    //For especifico para esse caso
    // Função sem nome || Define-se como função pelo uso do paramentro = "=>"
    sites.forEach(site =>{
        //linha
        const tr = document.createElement('tr');

        //Coluna
        const tdNome = document.createElement('td');
        tdNome.textContent = site.nome;
        
        //Coluna
        const tdEndereco = document.createElement('td')

        //Link
        const link = document.createElement('a');
        link.href = site.endereco.startsWith('http')? site.endereco: 'http://${site.endereco}' ;
        link.textContent = site.endereco;
        link.target = '_blank';
        tdEndereco.appendChild(link);
        
        //Coluna de Ações 
        const tdAcoes = document.createElement('td');
        tdAcoes.textContent = 'acoes'

        //Botao Editar
        const editarBtn = document.createElement('button')
        editarBtn.textContent = 'Editar'

        //Botao Excluir
        const excluirBtn = document.createElement('button')
        excluirBtn.textContent = 'Excluir'

        //Montar a Linha
        tr.appendChild(tdNome);
        tr.appendChild(tdEndereco);
        tr.appendChild(tdAcoes);
        //Colocar a Lonha no corpo da Tabela
        tabelaBody.appendChild(tr);
    });
    //Aqui criamos um laço de repetição || Apenas para demosntrar
    // for(let i = 0; i < 2; i++){
    //     console.log(sites[i]);
    // }
}

function excluirSite(id){
    //CONFIRM é equivalente ao Input 
    if (confirm('Tem Certeza? Certeza mesmo!!')){
        sites = sites.filter(site => site.id !== id);
        renderizarTabela();
        // Volta Aqui...
    }
}
renderizarTabela();
 