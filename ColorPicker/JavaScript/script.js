let container = document.querySelector('.container');
let spans = document.querySelectorAll('span');

const changeColor = (color) => {
      container.style.background = color;
      document.querySelectorAll('span').forEach((item) => {
            item.classList.remove('active');
      });
      event.target.classList.add("active")
};