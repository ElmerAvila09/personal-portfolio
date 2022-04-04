const sections = document.querySelectorAll('.part');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');

const allSelection = document.querySelector('.main-content');

function PageTransition(){

    // Set active when clicking a button
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');  
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Change betwen sections
    allSelection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        console.log(e)
        console.log(e.target)

        if(id){
            /* secBtns.forEach((btn) => {
                btn.classList.remove('active');
            })

            e.target.classList.add('active');
             */
            // Removing activs to the sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            // Adding to the active one
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransition();