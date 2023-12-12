
//  * @copyright UbedKhan 2023
//  * @author Ubed <ubedkhan2383@gmail.com>




/**
 * Light and dark mode
 */



var icons = document.getElementById("icons")
icons.onclick = function (){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains('dark-theme')){
        icons.src = 'img/sun.png'
    }else{
        icons.src = 'img/moon.png'
        
    }
}

// var icons = document.getElementById("icons")
// icons.onclick = function (){
//     document.body.classList.toggle("dark-theme")
//     if(document.body.classList.contains('dark-theme')){
//         icons.src = 'img/sun.png'
//     }else{
//         icons.src = 'img/moon.png'
        
//     }
// }

// Tab
const  tabBtn = document.querySelectorAll('[data-tab-btn]')

let [lastActiveTab] = document.querySelectorAll('[data-tab-content]')

let [lastActiveTabBtn] = tabBtn

tabBtn.forEach(item =>{
    item.addEventListener('click',function (){
        lastActiveTab.classList.remove("active")
        lastActiveTabBtn.classList.remove("active")

        const   tabContent = document.querySelector(`[data-tab-content='${item.dataset.tabBtn}']`)
        tabContent.classList.add("active")
        this.classList.add("active");
        lastActiveTab = tabContent
        lastActiveTabBtn = this;
    }) 
})