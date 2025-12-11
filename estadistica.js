// Datos simplificados de ejemplo (puedes cargarlos desde un CSV más adelante)
const dataEmpresas = {
  XOM: { meanOpen: 54.3, max: 180.95, min: 3.22, color: "#FF5733" },
  CVX: { meanOpen: 60.1, max: 175.2, min: 4.12, color: "#33C1FF" },
  COP: { meanOpen: 50.8, max: 160.8, min: 5.05, color: "#FFB833" },
  VLO: { meanOpen: 45.6, max: 170.3, min: 6.90, color: "#33FF8A" }
};

// Inicializa el gráfico
const ctx = document.getElementById("graficoPrecios").getContext("2d");
let chart;

function mostrarGrafico(empresa) {
  const { meanOpen, max, min, color } = dataEmpresas[empresa];

  // Si ya existe un gráfico, destrúyelo
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Promedio", "Máximo", "Mínimo"],
      datasets: [{
        label: `Estadísticas de ${empresa}`,
        data: [meanOpen, max, min],
        backgroundColor: [color, color, color],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: `Estadísticas de ${empresa}` },
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Mostrar información textual
  document.getElementById("infoEmpresa").innerHTML = `
    <h3>${empresa}</h3>
    <p><strong>Precio promedio:</strong> ${meanOpen.toFixed(2)} USD</p>
    <p><strong>Máximo histórico:</strong> ${max.toFixed(2)} USD</p>
    <p><strong>Mínimo histórico:</strong> ${min.toFixed(2)} USD</p>
  `;
}

// Evento al cambiar el select
document.getElementById("empresa").addEventListener("change", (e) => {
  mostrarGrafico(e.target.value);
});

// Mostrar el primero por defecto
mostrarGrafico("XOM");
<script>
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();
        const destino = this.getAttribute('href').substring(1);
        const contenedor = document.getElementById("contenido-dinamico");

        document.querySelectorAll(".menu-link").forEach(l => l.classList.remove("activo"));
        this.classList.add("activo");

        // Volver al inicio recargando la página
        if (destino === "inicio") {
            location.reload();
            return;
        }

        // Cargar contenido dinámico sin cambiar de página
        if (destino === "descriptiva") {
            contenedor.innerHTML = `
                <section class="contenedor">
                    <h1>Estadística Descriptiva</h1>
                    <p>Aquí va tu contenido de estadística descriptiva...</p>
                </section>
            `;
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (destino === "inferencial") {
            contenedor.innerHTML = `
                <section class="contenedor">
                    <h1>Estadística Inferencial</h1>
                    <p>Información sobre estadística inferencial...</p>
                </section>
            `;
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (destino === "machine") {
            contenedor.innerHTML = `
                <section class="contenedor">
                    <h1>Machine Learning</h1>
                    <p>Clasificación, regresión, modelos predictivos...</p>
                </section>
            `;
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
    });
});
</script>

