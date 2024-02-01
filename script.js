//declarar variable
const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');

//adjuntando controlador de eventos
toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    //modo claro
    document.body.style.background = "linear-gradient(135deg, #0c036a, #06a8ff)";
    body.style.color = 'white';
  }else{
    //modo oscuro
    document.body.style.background = "linear-gradient(150deg, #000000, #454545)";
    body.style.color = 'white';
  }
})