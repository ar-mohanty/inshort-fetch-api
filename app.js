var buttons = document.getElementsByClassName("allCat");
function LoadNews(category, button) {
  var buttons = document.getElementsByClassName("allCat");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add active class to the clicked button
  button.classList.add("active");

  var container = document.getElementById("container");
  container.innerHTML = "";

  var spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "block";
  }

  var url =
    "https://cors-anywhere.herokuapp.com/https://inshorts.deta.dev/news?category=business";
  fetch(`https://inshorts.deta.dev/news?category=${category}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("spinner").style.display = "none";

      for (var news of data.data) {
        const newsImgurl = news.imageUrl;
        const newsAuthor = news.author;
        const newsTitle = news.title;
        const newsTime = news.time;
        const newsDate = news.date;
        const newsContent = news.content;
        const newsReadmore = news.url;

        var div = document.createElement("div");
        div.innerHTML = `

        <div class="card shadow">
            <img src="${newsImgurl}" />
            <div class="details">
              <div class="category1">
                <p class="bg-danger">${newsAuthor}</p>
                <div class="timestamp my-3 d-flex align-items-center justify-content-between">
                  <span class="date">${newsDate}</span>
                  <span class="time">${newsTime}</span>
                </div>
              </div>
              <h2>${newsTitle}</h2>
              <p class="newscontent">${newsContent}</p>
              <a href="${newsReadmore}" target="_blank" class="readmore">Read More</a>
            </div>
        </div>
        
        `;
        container.appendChild(div);
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("btnload").style.display = "none";
}
