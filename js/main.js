// Initialization
const bar = document.getElementById('bar')
const sidebarWrapper = document.getElementById('sidebar-wrapper')
const pageContentWrapper = document.getElementById('page-content-wrapper')
const navLinks = document.querySelectorAll('li.has-sub > a')
const dropdowns = document.querySelectorAll('li.has-sub > .collapse')

var len = dropdowns.length

navLinks.forEach((link) =>{
    link.addEventListener('click', ()=>{
        if(link.classList.contains('collapsed') && !link.classList.contains('active')){
            closeAllDropdowns()
        }

        if(link.classList.contains('collapsed') && !link.classList.contains('active')){
            link.classList.add('active')
        } else{
            link.classList.remove('active')
        }
    })
})


function closeAllDropdowns(){
    for(var i =0; i<len; i++){
        navLinks[i].classList.remove('active')
    }
}




// Checking the width of the Screen
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
toggleSidebar()

// Toggle Sidebar on Medium or Smaller Device
function toggleSidebar() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    if (width <= 992) {
        bar.classList.toggle('open')
        sidebarWrapper.classList.remove('toggled')
        pageContentWrapper.classList.remove('toggled')
    }
}

// Toggle Sidebar on Click
bar.addEventListener('click', () => {
    bar.classList.toggle('open')
    sidebarWrapper.classList.toggle('toggled')
    pageContentWrapper.classList.toggle('toggled')
})
