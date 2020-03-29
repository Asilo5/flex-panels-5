const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));