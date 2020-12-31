
const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.col-right');
const content = document.querySelectorAll('.content');

const docker = document.querySelector('.header .nav-bar .nav-list .docker');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header-container')

const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');

//  tab menu in the about block
about.addEventListener('click', function(event) {

    // to find the buttons from the div through dataset.
    const id = event.target.dataset.id;
    
    if(id) {

        // if id is a value, it a button, if undefined, not a button
        // remove active from all other buttons except the clicked.

        btn.forEach(button => {
            // removes active from all buttons
            button.classList.remove('active');
            // adds active to clicked button.
            event.target.classList.add('active'); 
        });

        // hide other articles nd display only with matching id.
        content.forEach(art => {
            // removes articles content from display
            art.classList.remove('active');
        })

        const element = document.getElementById(id);
        // display only the content with matching id.
        element.classList.add('active');
    }
    
});

//  docker function in header
docker.addEventListener('click', () => {
    docker.classList.toggle('active');
    menu.classList.toggle('active');
});

// nav bar transparent while scrolling.
document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if(scrollPosition > 250) {
        header.style.backgrooundColor = '#29323c';
    } else {
        header.style.backgrooundColor = '#transparent';
    }
});

// docker closes after click
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        docker.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
