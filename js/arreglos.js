const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 12000,
  },

  {
    id: 2,
    nombre: "Mouse",
    precio: 300,
  },

  {
    id: 3,
    nombre: "Teclado",
    precio: 800,
  },
];

console.table(productos, ["nombre", "precio"]);

productos.forEach((producto) => {
  console.log(`${producto.nombre}: $${producto.precio}\n---------------`);
});
