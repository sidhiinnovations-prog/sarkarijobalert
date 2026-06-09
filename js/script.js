const updatesContainer = document.getElementById("updates-container");

updates.forEach((item) => {

  const card = document.createElement("div");

  card.classList.add("update-card");

  card.innerHTML = `

    <a href="${item.link}" target="_blank">
      ${item.title}
    </a>

    <p>
      ${item.description}
    </p>

  `;

  updatesContainer.appendChild(card);

});