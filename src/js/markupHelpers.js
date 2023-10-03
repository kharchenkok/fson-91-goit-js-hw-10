function createSelectOptionsMarkup(select, options) {
  return options
    .map(option =>
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${option.value}">${option.label}</option>`
      )
    )
    .join('');
}

function createInfoCardMarkup(infoCard, data) {
  const { name, description, temperament } = data.breeds[0]; // Деструктуризуємо об'єкт породи
  const url = data.url;

  infoCard.innerHTML = `
      <img class="cat-img" src="${url}" alt="${name}"  >
       <div class="">
      <h2 class="name">${name}</h2>
      <p class="description"><span>About:</span>${description}</p>
      <p class="temperament"><span>Temperament:</span> ${temperament}</p>
      </div>`;
}
export { createSelectOptionsMarkup, createInfoCardMarkup };
