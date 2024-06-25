window.onload=function(){
let oli=document.getElementById("infi-list");
	for(let i=0;i<10;i++){
		let li = document.createElement('li');
		li.innerText="Initial List Item " + (i + 1);
		oli.appendChild(li);
	}
 oli.addEventListener('scroll', function() {
    if (oli.scrollTop + oli.clientHeight >= oli.scrollHeight) {
      for(let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        li.innerText = "New List Item";
        oli.appendChild(li);
      }
    }
  });
}