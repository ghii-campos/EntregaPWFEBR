const pizzas = require('./atividade.json')

function listarAPizza(pizzas) {
    return pizzas.filter((pizza) => {
        return pizza
} 
    )
}
console.log(listarAPizza(pizzas));