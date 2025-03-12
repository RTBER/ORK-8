
document.querySelectorAll('.chapter-title').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Cambiar la visibilidad del contenido
    content.classList.toggle('active', !isExpanded);
    button.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);
  });
});





function convertirTexto() {
  let texto = document.getElementById("inputTexto").value;

  // Verifica si hay contenido antes de procesar
  if (texto.trim() === "") {
      document.getElementById("resultado").innerText = "Por favor, ingresa algún texto.";
      return;
  }

  // Convertir cada línea en un párrafo con etiquetas HTML visibles
  let resultadoHTML = texto
      .split("\n") // Divide el texto en líneas
      .map(linea => `&lt;p class="novela-description"&gt;${linea}&lt;/p&gt;`) // Escapa los < >
      .join("\n"); // Une las líneas con saltos de línea
  
  // Mostrar el resultado en la página con las etiquetas visibles
  document.getElementById("resultado").innerHTML = `<pre>${resultadoHTML}</pre>`;
}
