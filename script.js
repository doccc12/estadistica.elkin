// Referencias a los elementos del slider
const slider = document.getElementById("slider");
const anio = document.getElementById("anio");
const precio = document.getElementById("precio");

// Datos estadísticos simulados (puedes cambiarlos)
const precios = {
  2020: 45.3,
  2021: 60.1,
  2022: 75.5,
  2023: 80.2,
  2024: 70.6,
  2025: 85.4
};

// Actualizar cuando se mueve el slider
slider.addEventListener("input", () => {
  const valor = slider.value;
  anio.textContent = valor;
  precio.textContent = precios[valor] || "Sin datos";
});
function mostrarInfo(id) {
      document.getElementById(id).classList.toggle('mostrar');
    }

    const tabla = document.getElementById('tablaVariables');
    const tbody = tabla.querySelector('tbody');
    const filtroTexto = document.getElementById('filtroTexto');
    const filtroTipo = document.getElementById('filtroTipo');

    function filtrar() {
      const texto = filtroTexto.value.toLowerCase();
      const tipo = filtroTipo.value.toLowerCase();
      Array.from(tbody.querySelectorAll('tr')).forEach(f => {
        const tdText = f.cells[0].textContent.toLowerCase();
        const tdTipo = f.cells[3].textContent.toLowerCase();
        if(tdText.includes(texto) && (tipo === "" || tdTipo === tipo)){
          f.style.display = "";
        } else {
          f.style.display = "none";
        }
      });
    }

    filtroTexto.addEventListener('input', filtrar);
    filtroTipo.addEventListener('change', filtrar);

    const headers = tabla.querySelectorAll('th');
    headers.forEach((th, idx)=>{
      th.addEventListener('click', ()=>{
        const asc = !th.asc;
        th.asc = asc;
        const filas = Array.from(tbody.querySelectorAll('tr'));
        filas.sort((a,b)=>{
          const aText = a.cells[idx].textContent.toLowerCase();
          const bText = b.cells[idx].textContent.toLowerCase();
          return (aText>bText ? 1 : -1) * (asc ? 1 : -1);
        });
        filas.forEach(f=>tbody.appendChild(f));
      });
    });
    <script>
const links = document.querySelectorAll('.menu-link');
const secciones = document.querySelectorAll('.seccion');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = this.getAttribute('href').substring(1);

        // Quitar 'visible'
        secciones.forEach(sec => sec.classList.remove("visible"));

        // Quitar activo del menú
        links.forEach(l => l.classList.remove("activo"));

        // Agregar activo
        this.classList.add("activo");

        // Mostrar sección destino
        document.getElementById(destino).classList.add("visible");

        // Desplazar arriba suavemente
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
</script>

