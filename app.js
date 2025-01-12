precio = 1500000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const btn = document.querySelector(".mas")
const btn1 = document.querySelector(".menos")
const total = document.querySelector(".valor-total")
const cantidad = document.querySelector(".cantidad")

let contador = 0

btn.addEventListener("click", () => {
        contador++
        cantidad.innerHTML = contador
        total.innerHTML = contador * precio   
})

btn1.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        cantidad.innerHTML = contador;
        total.innerHTML = contador * precio; 
        
    }   else{
            alert("No has agregado productos");
        }
            
});

const selectorColores = document.getElementById('selector-colores').addEventListener('change', function() {
    document.body.style.background = this.value;
})