$(document).ready(function () {
    let lista = [
        { nombre: "Agustín", apellido: "Alonso", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "1.png" },
        { nombre: "David", apellido: "Priego", descripcion: "Hábil para resolver problemas y colaborar en equipo.", imagen: "3.png" },
        { nombre: "Eder", apellido: "Alonso", descripcion: "Destacado en resolver problemas y trabajo colaborativo.", imagen: "4.png" },
        { nombre: "Iván", apellido: "López", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "2.png" },
        { nombre: "Ángel", apellido: "Fernández", descripcion: "Hábil para resolver problemas y colaborar en equipo.", imagen: "5.png" },
        { nombre: "Messi", apellido: "Mola", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "6.png" },
        { nombre: "Diego", apellido: "Gallu", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "7.png" },
        { nombre: "Messi", apellido: "Panadero", descripcion: "Experto en resolución de problemas y trabajo en equipo.", imagen: "8.png" },
    ];

   
    function filtrarLista(nombreUsuario) {
        //limpia el contenedor de cartas antes de agregar nuevas cartas
        $(".contenedorCartas").empty();

        for (const persona of lista) {
            //comprueba el texto ingresado con el nombre del usuario
            if (persona.nombre.toLowerCase().includes(nombreUsuario.toLowerCase())) {
                let nuevaCarta = `
                    <div class="carta">
                        <div class="imagenNombre">
                            <div class="imagen"><img src="${persona.imagen}" alt=""></div>
                            <div class="nombreYapellido">
                                <div class="nombre">${persona.nombre}</div>
                                <div class="apellido">${persona.apellido}</div>
                            </div>
                        </div>
                        <div class="descripción">${persona.descripcion}</div>
                    </div>
                `;
                //agrega la nueva carta al contenedor
                $(".contenedorCartas").append(nuevaCarta);
            }
        }
    }
    //llamada a la función para que carguen las cartas al inicio
    filtrarLista("");
    
    $(".input[type='text']").on("input", function () {
        //valor de lo que va introduciendo el usuario
        let nombreUsuario = $(this).val();
        //función de filtrar
        filtrarLista(nombreUsuario);
    });

});
