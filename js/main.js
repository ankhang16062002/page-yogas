// Event button 
var buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;

        let isCreat = document.createElement('span');
        isCreat.style.left = x + 'px';
        isCreat.style.top = y + 'px';
        this.appendChild(isCreat);

        setTimeout( () => {
            isCreat.remove();
        }, 1000);
        
    })
} )



//event loadbackggrounf header
const colors = [
    '#82ccdd'
]

function animateSpan() {

    var header = document.querySelector('.wrap-one__header');
    var box = document.createElement('span');

    var size = Math.random() * 8;
    box.style.width = size + 'px';
    box.style.height = size + 'px';

    box.style.top = Math.random() * innerHeight + 'px';
    box.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    box.style.background = bg;

    header.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 5000);
}

setInterval(animateSpan, 20);

// MouseMove Menu 
    const maker = document.querySelector('.wrap-one__header-top-menu-maker');
    const itemLink = document.querySelectorAll('.wrap-one__header-top-menu li a');
    function setLoactionMaker(e) {
        maker.style.left = e.offsetLeft + 'px';
        maker.style.width = e.offsetWidth + 'px';
    }
    itemLink.forEach((link) => {
        link.addEventListener('mousemove', (e) => {
            setLoactionMaker(e.target);
        })
    })


//click drop down
var isClick = false;
var btnImg = document.querySelector('.wrap-one__body-experence-img');
var blockExpe = document.querySelector('.wrap-one__body-experence');
btnImg.onclick = function(e) {
    if(isClick) {
        this.classList.remove('active');
        blockExpe.classList.remove('active');
        isClick = false;
    }else{
        this.classList.add('active');
        blockExpe.classList.add('active');
        isClick = true;
    }
}



// slove js on mobile 
// slove menu 
const btnMenu = document.querySelector('.wrap-one__header-menubar');
var isOpen = false;
btnMenu.onclick = function(e) {
    if(isOpen) {
        document.querySelector('.wrap-one__header-top-menu').classList.remove('active');
        isOpen = false;
        btnMenu.classList.remove('active');

    }else{
        document.querySelector('.wrap-one__header-top-menu').classList.add('active');
        isOpen = true;
        btnMenu.classList.add('active');
    }
}

