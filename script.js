const nums = document.querySelectorAll('.circle');
const next_btn = document.querySelector('#next');

nums.forEach(element => {
    next_btn.addEventListener('click', () => {
        element.classList.add('active');
    })
})