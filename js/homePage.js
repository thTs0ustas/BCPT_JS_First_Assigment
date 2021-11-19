import homeHTML  from "./HTML_PARTS/home.js"


export const homePageFn = () => {
    document.getElementById('main').innerHTML = homeHTML
    document.getElementById('navbar-toggler').ariaExpanded = false
    document.getElementById('navbar-toggler').classList.add('collapsed')
    document.getElementById('navbarNavDropdown').classList.remove('show')  
}