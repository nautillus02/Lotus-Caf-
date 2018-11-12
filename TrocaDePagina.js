//FUNÇÃO P/ ABRIR O FORMULARIO DE CADASTRO DA LAN HOUSE
function cadastrar()
{
    document.getElementById("banner").style.display='none';
    document.getElementById("main").style.display='none';
    document.getElementById("newsletter").style.display='none';
	document.getElementById("cadastrar").style.display='inline';
}


//FUNÇÃO P/ ABRIR A DIV SOBRE
function sobre()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='inline';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.getElementById("cadastrarUsuario").style.display='none';
	document.querySelector('.menu').style.display = 'none';

}
//FUNÇÃO P/ ABRIR A DIV HOME
function home()
{
	document.getElementById("main").style.display='inline';
	document.getElementById("main2").style.display='none';
	document.getElementById("principal").style.display='none';
    document.getElementById("cadastrar").style.display='none';
    document.getElementById("banner").style.display='inline';
	document.getElementById("newsletter").style.display='inline';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.getElementById("cadastrarUsuario").style.display='none';
	document.querySelector('.menu').style.display = 'none';
}
//FUNÇÃO P/ ABRIR A DIV ASSISTENCIA TECNICA
function Ass_Tecnica()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='inline';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.getElementById("cadastrarUsuario").style.display='none';
	document.querySelector('.menu').style.display = 'none';
}

//FUNÇÃO P/ ABRIR A DIV MEUS COMPUTADORES
function MeusComputadores()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='inline';
	document.getElementById("main5").style.display='none';
	document.getElementById("cadastrarUsuario").style.display='none';
	document.querySelector('.menu').style.display = 'none';
}

//FUNÇÃO P/ ABRIR A DIV ADICIONAR USUARIOS
function adicionar_Usuario()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='inline';
	document.getElementById("cadastrarUsuario").style.display='none';
	document.querySelector('.menu').style.display = 'none';
}

//FUNÇÃO P/ ABRIR O FORMULARIO P/ ADICIONAR O USUARIO
function AdicionarUsuario()
{
	document.getElementById("cadastrarUsuario").style.display='inline';
	document.getElementById("main5").style.display='none';
	
	
}


//FUNÇÃO P/ FECHAR O BOTÃO CADASTRAR DO BANNER
function FecharButton()
{
	document.querySelector('.buttons').style.display = 'none';
}