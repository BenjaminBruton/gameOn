const classColl = document.getElementsByClassName("category-item");

for (let i = 0; i < classColl.length; i++) {
  classColl[i].addEventListener("click", function onClick(event) {
    event.target.style.color = "#32009E";
  });
}
