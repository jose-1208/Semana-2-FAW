// Ejercicio 1
document.getElementById("calcularPotencia").addEventListener("click", function() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var resultado = Math.pow(num1, num2);
    document.getElementById("resultado1").innerText = "El resultado es: " + resultado;
  });
  
  // Ejercicio 2
  document.getElementById("calcularFahrenheit").addEventListener("click", function() {
    var gradosC = parseInt(document.getElementById("gradosCentigrados").value);
    var fahrenheit = (gradosC * 9/5) + 32;
    document.getElementById("resultado2").innerText = "Grados Fahrenheit: " + fahrenheit;
  });
  
  //Ejercicio 3
  document.addEventListener("DOMContentLoaded", function() {
    const listaNombres = document.getElementById("listaNombres");
    const nombresFiltrados = document.getElementById("nombresFiltrados");
    
    document.getElementById("agregarNombre").addEventListener("click", function() {
        const nombreInput = document.getElementById("nombre");
        const nombre = nombreInput.value.trim();
        if (nombre !== "") {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
            nombreInput.value = ""; // Limpiar el input después de agregar el nombre
        }
    });

    document.getElementById("filtrarNombres").addEventListener("click", function() {
        const numLetrasInput = document.getElementById("numLetras");
        const numLetras = parseInt(numLetrasInput.value);
        
        // Limpiar lista de nombres filtrados antes de agregar los nuevos
        nombresFiltrados.innerHTML = "";

        if (!isNaN(numLetras) && numLetras > 0) {
            const nombres = listaNombres.getElementsByTagName("li");
            for (let i = 0; i < nombres.length; i++) {
                const nombre = nombres[i].textContent;
                if (nombre.length === numLetras) {
                    const li = document.createElement("li");
                    li.textContent = nombre;
                    nombresFiltrados.appendChild(li);
                }
            }
            numLetrasInput.value = ""; // Limpiar el input después de filtrar
        } else {
            alert("Por favor ingresa un número válido de letras.");
        }
    });
});


//Ejercicio 4
document.getElementById("calcularEdad").addEventListener("click", function() {
    const fechaNacimientoInput = document.getElementById("fechaNacimiento").value;
    const fechaNacimiento = new Date(fechaNacimientoInput);
    const fechaActual = new Date();
    
    const edadMilisegundos = fechaActual - fechaNacimiento;
    const edadAnios = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("resultadoEdad").textContent = "Edad: " + edadAnios + " años";
});

//Ejercicio 5
document.getElementById("calcularPalabras").addEventListener("click", function() {
    const cadenaInput = document.getElementById("cadena").value;
    const palabras = cadenaInput.split(" ").filter(function(palabra) {
        return palabra.trim() !== "";
    });
    const numPalabras = palabras.length;

    document.getElementById("resultadoPalabras").textContent = "Número de Palabras: " + numPalabras;
});

//Ejercicio 6
const numeros = [];

document.getElementById("agregarNumero").addEventListener("click", function() {
    const numeroInput = document.getElementById("numero");
    const numero = parseInt(numeroInput.value);
    
    if (!isNaN(numero)) {
        numeros.push(numero);
        const li = document.createElement("li");
        li.textContent = numero;
        document.getElementById("listaNumeros").appendChild(li);
        numeroInput.value = ""; // Limpiar el input después de agregar el número
    } else {
        alert("Por favor ingresa un número válido.");
    }
});

document.getElementById("calcularPromedio").addEventListener("click", function() {
    if (numeros.length > 0) {
        const suma = numeros.reduce((a, b) => a + b, 0);
        const promedio = suma / numeros.length;
        document.getElementById("resultadoPromedio").textContent = "El promedio es: " + promedio.toFixed(2);
    } else {
        document.getElementById("resultadoPromedio").textContent = "No hay números para calcular el promedio.";
    }
});

//Ejercicio 7
document.getElementById("mostrarColor").addEventListener("click", function() {
    const colorInput = document.getElementById("color").value;
    const cuadroColor = document.getElementById("cuadroColor");

    // Verificar si el color ingresado es un formato hexadecimal válido
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(colorInput)) {
        cuadroColor.style.backgroundColor = colorInput;
    } else {
        alert("Por favor, ingrese un color válido en formato hexadecimal (por ejemplo, #RRGGBB).");
    }
});

  // Otros ejercicios...
  