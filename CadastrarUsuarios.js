//CADASTRO DOS USUARIOS
class Cadastro_Usuarios{
	constructor(nome,cpf,telefone,email)
	{
        this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.email = email;
		
	}
}
//FUNÇÃO RECEBENDO OS VALORES DOS IDS
function CadastrarUsua() {
	
	var nome = document.getElementById('Usuario_Nome').value;
	
	var email = document.getElementById('Usuario_Email').value;
	
    var cpf = document.getElementById('Usuario_Cpf').value;
    var telefone = document.getElementById('Usuario_Telefone').value;
    

	if (nome,email,cpf,telefone == '') {
		alert('Campos vazios !!! preencha');
		document.getElementById("cadastrarUsuario").style.display='inline';
	document.getElementById("main5").style.display='none';
    }
    else{
		var cadastro = new Cadastro_Usuarios(nome,cpf,telefone,email);
		cadastros_usuarios.salvar_cadastro_usuario(cadastro);
        location.reload();
        
    }
}

