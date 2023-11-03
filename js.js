function calcularPrecioConDescuento(precioOriginal, porcentajeDeDescuento) {
    const descuento = (precioOriginal * porcentajeDeDescuento) / 100;
    const precioConDescuneto = precioOriginal - descuento;
    return precioConDescuneto;
}

let nombreProducto = prompt('Ingresa el nombre del producto')
let precioOriginal = parseFloat(prompt('Ingresa el precio del producto'));
let porcentajeDeDescuento = parseFloat(prompt('Ingresa el porcentaje del descuento'))

if (isNaN(precioOriginal) || isNaN(porcentajeDeDescuento)) {
    console.log('Por favor, Ingresar valores numericos validos');
} else {
    const precioConDescuento = calcularPrecioConDescuento(precioOriginal, porcentajeDeDescuento);

    console.log(`El valor de la ${nombreProducto} es de: ${precioOriginal}`);
    console.log(`Este es el descuento: ${porcentajeDeDescuento}%`);
    console.log(`Este es el precio con descuento de la ${nombreProducto}: ${precioConDescuento}`);
}

