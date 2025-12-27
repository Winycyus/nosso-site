const lista = document.getElementById("lista-musicas");

fetch("http://localhost:3000/musicas")
  .then(response => response.json())
  .then(musicas => {
    musicas.forEach(musica => {
      const li = document.createElement("li");
      li.textContent = `${musica.nome} - ${musica.artista}`;
      lista.appendChild(li);
    });
  });

  