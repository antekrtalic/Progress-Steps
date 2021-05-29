const nums = document.querySelectorAll('.circle');
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
let i= 1;
let j = nums.length - 1;

next_btn.addEventListener('click', () => {
    nums[i].classList.add('active');
    i += 1;
    if (nums[nums.length - 1].classList.contains('active')) {
        next_btn.disabled = true;
        next_btn.classList.remove('active');
        prev_btn.disabled = false;
        prev_btn.classList.add('active');
    }
})
console.log(i);