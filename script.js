const nums = document.querySelectorAll('.circle');
const next_btn = document.querySelector('#next');

nums.forEach(num => {
    next_btn.addEventListener('click', () => {
        num.classList.add('active');
    })
})



function addClass() {
    nums.forEach(element => {
        element.classList.add('active');
    })
}