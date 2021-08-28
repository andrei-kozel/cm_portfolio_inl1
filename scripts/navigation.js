const navigation = document.querySelector(".navigation");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const links = document.querySelectorAll(".link");

openButton.addEventListener("click", () => {
  navigation.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  navigation.style.transform = "translateX(400px)";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navigation.style.transform = "translateX(400px)";
  });
}
