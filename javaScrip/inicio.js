function mostar(corte) {

    fetch('./javaScrip/productos.json')

        .then((res) => res.json())
        .then((data) => {

            guardarProductosCarrito(data)

            let carga = document.getElementById("box1")
            let contenido = document.createElement("div")
            contenido.className = "row "

            for (const i of data) {

                if (corte == 1 && i.id < 6) {
                    contenido.innerHTML += `
                    <div class="col-md-4 card m-2 text-center" style="width: 13rem;">
                        <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${i.nom}</h5>
                            <p class="card-text">${i.descripcion}</p>
                            <p class="card-text">$${i.precio}</p>
                            <a title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                        </div>
                    </div> `
                }

                if (corte == 2) {
                    if (i.id > 14 && i.id < 21) {
                        contenido.innerHTML += `
                    <div class="card m-2 text-center" style="width: 13rem;">
                    <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                    <div class="card-body">
                        <h5 class="card-title">${i.nom}</h5>
                        <p class="card-text">${i.descripcion}</p>
                        <p class="card-text">$${i.precio}</p>
                        <a  title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                    </div>
                </div>                             
                    `;
                    }
                }

                if (corte == 3) {
                    if (i.id > 5 && i.id < 15) {
                        contenido.innerHTML += `
                    <div class="card m-2 text-center" style="width: 13rem;">
                        <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${i.nom}</h5>
                            <p class="card-text">${i.descripcion}</p>
                            <p class="card-text">$${i.precio}</p>
                            <a title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                        </div>
                    </div>                             
                    `;
                    }
                }

                if (corte == 4) {
                    if (i.id > 20 && i.id < 26) {
                        contenido.innerHTML += `
                    <div class="card m-2 text-center" style="width: 13rem;">
                        <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${i.nom}</h5>
                            <p class="card-text">${i.descripcion}</p>
                            <p class="card-text">$${i.precio}</p>
                            <a title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                        </div>
                    </div>                             
                    `;
                    }
                }

                if (corte == 5) {
                    if (i.id > 25 && i.id < 31) {
                        contenido.innerHTML += `
                    <div class="card m-2 text-center" style="width: 13rem;">
                    <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                    <div class="card-body">
                        <h5 class="card-title">${i.nom}</h5>
                        <p class="card-text">${i.descripcion}</p>
                        <p class="card-text">$${i.precio}</p>
                        <a title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                    </div>
                </div>                             
                    `;
                    }
                }

                if (corte == 6) {

                    contenido.innerHTML += `
                    <div class="card m-2 text-center" style="width: 13rem;">
                        <img src="${i.imagen}" class="card-img-top" alt="${i.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${i.nom}</h5>
                            <p class="card-text">${i.descripcion}</p>
                            <p class="card-text">$${i.precio}</p>
                            <a title="agregar al carrito" onClick="agregarCarrito(${i.id})" class="btn btn-success">Agregar</a>
                        </div>
                    </div>                            
                    `;
                }

            }

            contenido.innerHTML += ' <hr> '
            carga.appendChild(contenido)

        })


}

function obtenerProductosCarrito() {

    return JSON.parse(localStorage.getItem("productos")) || []
}

function guardarProductosCarrito(data) {

    localStorage.setItem("productos", JSON.stringify(data))
}

function guardarProductosEnCarrito(carro) {

    localStorage.setItem("carritos", JSON.stringify(carro))
}

function obtenerProductosEnCarrito() {

    return JSON.parse(localStorage.getItem("carritos")) || []
}

function actulizarBotonCarrito() {

    let productos = obtenerProductosEnCarrito();

    let contenido = `
    <button type="button" class="btn position-relative">
        <img src="../img/logo.jpg" class="rounded-circle " style="width: 40px" alt="logo">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">0<span class="visually-hidden">unread messages</span></span>
    </button>`;
    let total = 0

    if (productos.length > 0) {

        for (let x of productos) {

            total += x.cantidad
        }

        contenido = `
    <button type="button" class="btn position-relative">
        <img src="../img/logo.jpg" class="rounded-circle " style="width: 40px" alt="logo">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success"> ${total} <span class="visually-hidden">unread messages</span></span>
    </button>`;

    }

    document.getElementById("botonCarrito").innerHTML = contenido

}

let carrito = []

function agregarCarrito(id) {

    let productos = obtenerProductosCarrito();

    let productoCarro = productos[id - 1]

    let pos = carrito.findIndex(x => x.id == id)

    if (pos > -1) {

        carrito[pos].cantidad += 1

    } else {

        productoCarro.cantidad = 1
        carrito.push(productoCarro)

    }

    guardarProductosEnCarrito(carrito)

    actulizarBotonCarrito()

}

actulizarBotonCarrito()
