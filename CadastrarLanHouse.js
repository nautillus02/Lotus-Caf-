//CADASTRO DA LAN HOUSE
class Cadastro_LanHouse{
	constructor(nome,cpf,telefone,email,senha,ConfirmaSenha){
        this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
		this.ConfirmaSenha = ConfirmaSenha;
	}
}
//FUNÇÃO RECEBENDO OS VALORES DOS IDS
function CadastrarLanHouse() {
	var nome = document.getElementById('Nome').value;
	var email = document.getElementById('Email').value;
	var senha = document.getElementById('Senha').value;
    var cpf = document.getElementById('Cpf').value;
    var telefone = document.getElementById('Telefone').value;
    var ConfirmaSenha = document.getElementById('ConfirmaSenha').value;

	if (nome,email,senha,cpf,telefone,ConfirmaSenha == '') {
		alert('Campos vazios !!! preencha');
    }
    else{
		var cadastro = new Cadastro_LanHouse(nome,cpf,telefone,email,senha,ConfirmaSenha);
		cadastros_login.salvar_cadastro_login(cadastro);
        location.reload();
        FecharButton();
    }
}

function FecharButton()
{
	document.querySelector('.buttons').style.display = 'none';
}