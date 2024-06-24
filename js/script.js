const contadorVisitas = document.getElementById("contadorVisitas")
const button = document.getElementById("btnReestablecer")


let contadorString = ''
let contadorNumber = 0



window.addEventListener('load',()=> {
 //console.log(localStorage.getItem('contador'))   
    if (localStorage.getItem('contador') !== null){
        contadorString = localStorage.getItem('contador')
        contadorNumber = parseInt(contadorString)
    }
    contadorNumber++
    localStorage.setItem('contador', contadorNumber)
    contadorVisitas.textContent = localStorage.getItem('contador')
})

button.addEventListener('click',()=> {
    localStorage.clear() 
    contadorNumber = 0
    contadorVisitas.textContent = contadorNumber
}  
)

/*cuando reseteaba a 0 la primera vez que accedia me salia un NAN,
hice un console.log(localStorage.getItem('contador') y salia un null, quiere decir que ese valor no existe
por eso hice el if, si es null, que directamente a contadorNumber sume 1, si es distinto, que coja el valor 
de contador, lo parsee y luego ya le sume uno*/ 