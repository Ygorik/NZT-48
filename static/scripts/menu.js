const menuRadioButtons = document.querySelectorAll('input[type=radio]')
const dropedMenus = document.querySelectorAll('.dropdown')

for (radioButton of menuRadioButtons){
    radioButton.addEventListener('click', event => {
        if (event.currentTarget.classList.contains('drop')) {
            event.currentTarget.classList.remove('drop')
            event.currentTarget.checked = false
        }else {
            menuRadioButtons.forEach(button => {
                button.classList.remove('drop')
            })
            event.currentTarget.classList.add('drop')
            event.currentTarget.checked = true
        }
    })
}

function dropMenu(button, event){
    console.log(button);
    button.classList.remove('drop')
    button.checked = false
}

for (let i = 0; i < dropedMenus.length; i++){
    dropedMenus[i].addEventListener('mouseleave', dropMenu.bind(null, menuRadioButtons[i]))
}