let list = document.querySelectorAll('.list .item');
let slider = document.querySelector('.slider');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);

function nextItem() {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup += left_each_item;
    slider.classList.remove('right');
    changeSlider();
}

function prevItem() {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup -= left_each_item;
    slider.classList.add('right');
    changeSlider();
}

function changeSlider() {
    // find item has class hidden to remove it
    let hidden_old = document.querySelector('.item.hidden');
    if (hidden_old) hidden_old.classList.remove('hidden');
    // find item old active to remove it and add class hidden
    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');
    // add class active in position item active new
    list[active].classList.add('active');
    // change mockup background
    mockup.style.setProperty('--left', leftMockup + '%')

    // refresh auto run
    clearInterval(refreshInterval);
    refreshInterval = setInterval(
        () => next.click(), 5000
    )
}

// add event auto run slider 5s
let refreshInterval = setInterval(
    () => next.click(), 5000
)