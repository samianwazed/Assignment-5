// document.getElementsByClassName("complete-btn").addEventLis

let buttons = document.getElementsByClassName("complete-btn");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        alert("Board Updated Successfully");
        buttons[i].classList.add('disabled');
    })
}

