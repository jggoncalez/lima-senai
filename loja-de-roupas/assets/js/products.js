fetch("database.json")
  .then(response => response.json())
  .then((data) => {
    console.log(data);

    const prodGrid = document.getElementById('grid');

    data.forEach(prod => {
      const fig = document.createElement("figure");

      fig.innerHTML = `
        <img src="${prod.picture}" alt="${prod.name}">
        <figcaption>
          <strong>${prod.name}</strong><br>
          <i style="color: gray; font-size: 14px;">${prod.category}<br></i>
          ${prod.description}<br>
          R$ ${prod.price}
        </figcaption>
        <input type="button" value="Add ao carrinho" onclick="addCart('${prod.name}', ${prod.price} )">
      `;

      prodGrid.appendChild(fig);
    });
  })
  .catch(err => console.error("ERRO! ERRO! NÃO CARREGOU!!!!:", err));
