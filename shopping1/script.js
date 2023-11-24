const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
	bar.addEventListener('click',()=>{
		nav.classList.add('active');
	})
}

document.querySelector(".fa-times").addEventListener("click", function() {
  document.querySelector(".close").style.display = "none";
});

