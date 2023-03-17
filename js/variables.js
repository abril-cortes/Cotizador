//CONEXION CON EL DOM JS
const propiedad = document.querySelector("#propiedad");
const ubicacion = document.querySelector("#ubicacion");
const metros2 = document.querySelector("#metros2");
const btnCotizar = document.querySelector("button");
const importe = document.querySelector("span");
const btnEnviar = document.querySelector("span.guardar");

//BASE DE DATOS FICTICIA! 
const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Depto. Edificio', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19},]
                        // {tipo: 'Oficina', factor: 2.39},
                        // {tipo: 'Local Comercial', factor: 1.41},
                        // {tipo: 'Depósito Logística', factor: 1.92},]

const datosUbicacion = [{tipo: 'CABA', factor: 1.13},
                        {tipo: 'Tandil', factor: 1.04},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Patagonia', factor: 1.00},]

const CostoM2 = 35.86