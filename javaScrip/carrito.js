const dibujarCarrito = () => {

    let productos = obtenerProductosEnCarrito()

    let contenido = `<p class="alert alert-success m-2 text-center h3 title="Vaciar carrito">El carrito se encuenta vacio</p>`

    if (productos.length > 0) {
        contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white m-5 " onclick="vaciarCarrito()" title="vacias Carrito">Vaciar carrito</a></p>
        <table class="table">`

        let total = 0
        for (const producto of productos) {

            let precio = producto.precio * producto.cantidad

            contenido += `<tr col-md-12> 
            <td><img src="${producto.imagen}" class="rounded-5" alt="${producto.nom} style="width:10"></td>
            <td class="align-middle p-5 h6">${producto.nom}</td>
            <td class="align-middle p-5 h6">$${producto.precio} X unidad</td>
            <td class="align-middle p-5 h6"> Cantidad: ${producto.cantidad}</td>
            <td class="align-middle p-5 h6">Total: $${precio}</td>
            <td "text-end"><a href="#"class="btn btn-danger  m-5" title="Borrar producto" onclick="borrarElementoCarrito(${producto.id})" >Eliminar</a></td>
        </tr>`
            total += precio

        }

        contenido += `<tr>
    <td>&nbsp</td>
    <td><p class="text-center h3">Total a pagar es </p></td>
    <td class="h3 text-center">$${total}</td>
    <td class="text-end" ><a class="btn btn-success " title="Finalizar compra" onclick="finalizarCompra()" >Finalizar Compra</a></td>
    </tr>`

        contenido += `</tr >`
    }

    document.getElementById("carroCompras").innerHTML = contenido
}

const vaciarCarrito = () => {

    localStorage.removeItem("carritos")
    actulizarBotonCarrito()
    dibujarCarrito()
}

const borrarElementoCarrito = (id) => {

    let productos = obtenerProductosEnCarrito()

    let pos = productos.findIndex(x => x.id == id)

    productos[pos].cantidad -= 1

    console.log(productos[pos].cantidad)

    if (productos[pos].cantidad == 0) {

        productos.splice(pos, 1)

    }


    guardarProductosEnCarrito(productos)

    actulizarBotonCarrito()

    dibujarCarrito()
}

const finalizarCompra = () => {

    vaciarCarrito()
    let contenido = `<div class="alert alert-success m-2 text-center h3" role="alert">
        Gracias por tu compra.
        </div>`
    document.getElementById("carroCompras").innerHTML = contenido
}

actulizarBotonCarrito()

dibujarCarrito()