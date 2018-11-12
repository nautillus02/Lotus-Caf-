function abrirMenu(){
    document.querySelector('.menu').style.display = 'flex';
  }
  
  function fecharMenu(){
     document.querySelector('.menu').style.display = 'none';
  }
  
  document.querySelector('#menu_button').onclick = function(){
    if(document.querySelector('#menu').style.display == 'none'){
      abrirMenu();  
    }else{
      fecharMenu();
    }
  };
  