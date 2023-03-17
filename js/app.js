// const propiedad =
//  const ubicacion =

// function cargarCombo() {...}
const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    }
}
cargarCombo(propiedad, datosPropiedad);
cargarCombo(ubicacion, datosUbicacion);


const datosCompletos = ()=> {
    return (propiedad.value !== "..." && ubicacion.value !== "..." &&
    parseInt(metros2.value) && parseInt(metros2.value) >= 20) ? true : false;
    // if (propiedad.value !== "..." &&
    //     ubicacion.value !== "..." &&
    //     parseInt(metros2.value) &&
    //     parseInt(metros2.value) >= 20) {
    //         return true;
    //     } else {
    //         return false;
    //     }
}

const realizarCotizacion = ()=> {
    if (datosCompletos()) {
        const seguro = new Cotizador(metros2.value, propiedad.value, ubicacion.value, CostoM2);
        importe.innerText = seguro.cotizar();
        btnEnviar.classList.remove("ocultar");
    } else {
        alert("⛔ Completa todos los valores solicitados");
    }
    // location.reload() // nos conecta con la barra url (leerla o ir hacia adelante y atras), nos resetea los datos
}
const toastSwal = () => {
    Swal.fire({
        title: "Cotizacion enviada.",
        text: "¡Muchas gracias por elegirnos!",
        icon: "success",
        confirmButtonText: "get it",
        timer: 6000
    })
}
const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: propiedad[propiedad.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        metreosCuadrados: metros2.value,
        poliza: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion));
    // alert("✅ Cotizacion enviada. ¡Muchas gracias por elegirnos!");
    toastSwal();
    btnEnviar.classList.add("ocultar");
    location.reload();
}


btnCotizar.addEventListener("click", realizarCotizacion);
btnEnviar.addEventListener("click", enviarPorEmail);


