oli.addEventListener('scroll', function() {
  if (oli.scrollTop + oli.clientHeight >= oli.scrollHeight) {
    for(let i = 0; i < 2; i++) {
      let li = document.createElement('li');
      li.innerText = "New List Item";
      oli.appendChild(li);
    }
  }
});