const icon = document.querySelector('#icon');
const mainContent = document.querySelector('.main-content');
const sidebarMain = document.querySelector('.sidebar-main');

icon.addEventListener('click',()=>{
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        mainContent.classList.remove('hide')
        mainContent.classList.add('show')

        sidebarMain.classList.remove('hide')
        sidebarMain.classList.add('show')


    } else {
        icon.classList.remove('fa-close')
        icon.classList.add('fa-bars')

        mainContent.classList.add('hide')
        mainContent.classList.remove('show')

        sidebarMain.classList.remove('show')
        sidebarMain.classList.add('hide')

      
        
    }

})

