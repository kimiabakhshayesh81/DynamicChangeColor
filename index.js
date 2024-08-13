let themnes = document.querySelector('.themes')
let btnColor = document.querySelectorAll('.btn')


btnColor.forEach(function(colors){
    colors.addEventListener('click' , function(){
        let result = colors.getAttribute('data-color')
        console.log(result)
        document.documentElement.style.setProperty('--theme-color' , result)
    }) 
})