import "/sass/style.scss";

// Carga de productos (simulado)
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

function cargarProductos() {
    // Aquí se simularía la carga de productos desde una base de datos o una API
    // Por ahora, utilizaremos un array de productos de ejemplo
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 10 },
        { id: 2, nombre: 'Producto 2', precio: 20 },
        { id: 3, nombre: 'Producto 3', precio: 30 },
    ];

    // Mostrar los productos en la página
    const productosContainer = document.querySelector('.productos');
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(productoElement);
    });
}

// Carrito de compras
let carrito = [];

function agregarAlCarrito(id, nombre, precio) {
    const item = { id, nombre, precio };
    carrito.push(item);
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito');
    carritoContainer.innerHTML = '';

    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        carritoContainer.appendChild(itemElement);
    });

    actualizarTotal();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    document.querySelector('.total').innerText = `Total: $${total}`;
}

