const panels = document.querySelectorAll('.panels');
console.log(panels);

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));