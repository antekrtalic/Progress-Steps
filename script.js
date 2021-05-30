const nums = document.querySelectorAll('.circle');
const spans = document.querySelectorAll('.line');
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
let i= 1;
let j = nums.length - 1;
console.log(spans.length);

next_btn.addEventListener('click', () => {
    nums[i].classList.add('active'); 
    spans[i - 1].classList.add('active');
    i += 1;
    if (nums[nums.length - 1].classList.contains('active')) {
        next_btn.disabled = true;
        next_btn.classList.remove('active');
        prev_btn.disabled = false;
        prev_btn.classList.add('active');
    }
})


prev_btn.addEventListener('click', () => {
    console.log(i);
    i -= 1;
    nums[i].classList.remove('active');
    
    if (i === 1) {
        prev_btn.disabled = true;
        prev_btn.classList.remove('active');
        next_btn.disabled = false;
        next_btn.classList.add('active');
    }
})

