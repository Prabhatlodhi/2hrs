let accordion = document.getElementsByClassName('content_container');

for(let i=0; i < accordion.length; i++){
    console.log('llllllllll')
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};