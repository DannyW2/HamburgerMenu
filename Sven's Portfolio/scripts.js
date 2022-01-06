/**
 * 1- Detect someone clicking the hamburger menu icon (addEventListener)
 * 2- Add a class to the menu (.menu-open)
 * 3- Detect when someone clicks the 'close-menu' ID
 * 4- Remove the .menu-open class
 * 
 * 'toggling a class'
 */

document.getElementById("menu-hamburger").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("menu-open")
})

document.querySelector("#menu-close").addEventListener("click", function(){
    document.querySelector(".menu").classList.remove("menu-open")
})