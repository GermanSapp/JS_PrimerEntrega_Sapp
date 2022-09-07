//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, tipo, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio; //PRECIOS FICTICIO EN DOLARES, todavia no definimos con mi papa  los costos 
        this.tipo = tipo;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo los arrays para las categorias de los productos
const valvulas = [];
const electronicos = [];
const instrumentos = [];

//Cargo el stock de productos segun su categoria
//VALVULAS
valvulas.push(new Producto("Válvula El-34", 1, 20, "Semicondutor", 30));
valvulas.push(new Producto("Válvula Jj 6l6 Gc", 2, 14, "Semicondutor", 10));
valvulas.push(new Producto("Valvula Mullard El84", 3, 18, "Semicondutor", 20));
valvulas.push(new Producto("Válvula Sovtek 5ar4", 4, 30, "Semicondutor", 15));
//ELECTRONICOS
electronicos.push(new Producto("Pack X 5 Capacitor Poliester 0.068uf 100v", 5, 4, "Varios", 20));
electronicos.push(new Producto("Pack X 5 Potenciometro 5k Ohms LineaL", 6, 3, "Varios", 40));
electronicos.push(new Producto("Pack X 5 Transistor 2n2222", 7, 2, "Varios", 40));
//INSTRUMENTOS  
instrumentos.push(new Producto("Multímetro Barovo con funda", 8, 45, "Digital", 10));
instrumentos.push(new Producto("Amperímetro analogico para gabinete", 9, 55, "Analógico", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const valvula of valvulas) {
    alert("ID (" + valvula.id + ") - " + valvula.nombre);
}
for (const electronico of electronicos) {
    alert("ID (" + electronico.id + ") - " + electronico.nombre);
}
for (const instrumento of instrumentos) {
    alert("ID (" + instrumento.id + ") - " + instrumento.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio(precioValvula, cantidadValvula, costoEnvio) {
    return ((precioValvula * 1.21) * cantidadValvula) + costoEnvio;
}

//Solicito al usuario el ID de la prenda y lo almaceno en una nueva variable con la prenda seleccionada
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const valvulaBuscada = valvulas.find(valvula => valvula.id === productoSeleccionado);
const electronicoBuscado = electronicos.find(electronico => electronico.id == productoSeleccionado);
const instrumentoBuscado = instrumentos.find(instrumento => instrumento.id == productoSeleccionado);

//Solicito al usuario la cantidad del articulo
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del articulo seleccionado:"));

//valor aproximado del costo de envio en dolar promedio dentro de Cordoba Capital
const envio = 5;

//Salidas de consola indicando el precio final de la compra segun la articulo elegido
if (productoSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionado <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(valvulaBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    valvulaBuscada.vender(cantidad);
} else if (productoSeleccionado <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(electronicoBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    electronicoBuscado.vender(cantidad);
} else if (productoSeleccionado <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(instrumentoBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    instrumentoBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}