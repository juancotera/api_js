const div = document.querySelector('.card_container');
const url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

function getResources() {
  return new Promise(function(resolve, reject) {
    axios.get(url)
    .then(function(response) {
      //obtener datos
      resolve(response.data.communityCategories)
    })
    .catch(function(error) {
      //capturar errores
      reject(error)
    });
  });
}

async function challenge() {
  //traemos el recurso
  const categories = await getResources()
    categories.forEach((data) => {
    div.innerHTML += `
    <div class="card">
      <div class="card_cover">
        <img class="card_cover--background" src="${data.background || 'https://storage.googleapis.com/bucket-larnu/media/business/153/images/BO64E73I.png'}" alt="${data.name}">
        <img class="card_cover--logo"  src="${data.icon}" alt="${data.name}">
      </div>
      <div class="card_content">
        <h3 class="card_title">${data.name}</h3>
        <div class="card_progress">
          <p>Progreso</p>
          <span class="quizzes">${data.quizzesDone}</span>
          <span>${data.totalQuizzes}</span>
        </div>
        <a href="#"><img class="like" src="./asset/like.png"></a>
      </div>
    </div>
    `;
    });
  console.log(categories);
}

challenge()