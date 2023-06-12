//////////CARRITO//////////
const stockProductos = [
    {
      id: 1,
      nombre: "Súper Mario Bros. La película (2023)",
      cantidad: 1,
      desc: "Animación, Familia, Aventura, Fantasía, Comedia",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
    },
    {
      id: 2,
      nombre: "Spider-Man: Cruzando el Multiverso (2023)",
      cantidad: 1,
      desc: "Luchas con los mejores graficos",
      precio: 1500,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg",
    },
    {
      id: 3,
      nombre: "Transformers: El despertar de las bestias (2023)",
      cantidad: 1,
      desc: "Acción, Aventura, Ciencia ficción",
      precio: 1570,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3oypSaTizrfBbpIeRs8tTOF2EqV.jpg",
    },
    {
      id: 4,
      nombre: "Fast & Furious X (2023)",
      cantidad: 1,
      desc: "Acción, Crimen, Suspense",
      precio: 1000,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4A76udAc8XWmLs1T29Kocw5Go3H.jpg",
    },
    {
      id: 5,
      nombre: "Perros de caza (2023)",
      cantidad: 1,
      desc: "Action & Adventure, Drama, Crimen",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWzp4HpDifuyNF8zkPIy8MKCg2d.jpg",
    },
    {
      id: 6,
      nombre: "El Gato con Botas: El último deseo (2022)",
      cantidad: 1,
      desc: "Animación, Familia, Fantasía, Aventura, Comedia",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
    },
    {
      id: 7,
      nombre: "Titanic II (2010)",
      cantidad: 1,
      desc: "Acción, Aventura, Suspense ",
      precio: 1400,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dGimwAyUWnZoffWTiiWnf9mFxV2.jpg",
    },
    {
      id: 8,
      nombre: "The Rookie (2018)",
      cantidad: 1,
      desc: "Crimen, Drama",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ts1Xda9uefLPZtREJ7EboHZga0u.jpg",
    },
    {
      id: 9,
      nombre: "Ant-Man y la Avispa: Quantumanía (2023)",
      cantidad: 1,
      desc: "Acción, Aventura, Ciencia ficción",
      precio: 1400,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lKHy0ntGPdQeFwvNq8gK1D0anEr.jpg",
    },
    {
      id: 10,
      nombre: "Scream 4 (2011)",
      cantidad: 1,
      desc: "Terror, Misterio",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sr7WNBgjX1UH9yw4Qq4o6GLAyVf.jpg",
    },
  ];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

//////////CARRITO//////////