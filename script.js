const nums = document.querySelectorAll('.circle');
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
let i = 1;

if (nums[nums.length - 1].classList.contains('active')) {
    next_btn.disabled = true;
} else if (!nums[i].classList.contains('active') && (!nums[nums.length - 1].classList.contains('active'))) {
    next_btn.addEventListener('click', () => {
        nums[i].classList.add('active');
        i += 1;
    })    
}

