//BANCO P/ CADASTRO DA LAN HOUSE
class banco_LanHouse{
	constructor(indentificacao_banco){
		this.indentificacao_banco = indentificacao_banco;
		this.database = JSON.parse(localStorage.getItem(this.indentificacao_banco)) || [];
	}
	salvar_cadastro_login(cadastro){
		this.database.push(cadastro);
		localStorage.setItem(this.indentificacao_banco , JSON.stringify(this.database));
		alert('Salvo com sucesso');
		
	}
}
var cadastros_login = new banco_LanHouse('CadastroLanHouse');


//BANCO P/ CADASTRO DOS USUARIOS DA LAN HOUSE
class banco_Usuarios{
	constructor(indentificacao_banco){
		this.indentificacao_banco = indentificacao_banco;
		this.database = JSON.parse(localStorage.getItem(this.indentificacao_banco)) || [];
	}
	salvar_cadastro_usuario(cadastro){
		this.database.push(cadastro);
		localStorage.setItem(this.indentificacao_banco , JSON.stringify(this.database));
		alert('Salvo com sucesso');
		
	}
}
var cadastros_usuarios = new banco_Usuarios('CadastroUsuarios');