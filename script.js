const textElement = document.querySelector(".lessons-list-timeline__header");
const allLessons = document.querySelectorAll(".lessons-timeline__item");
const attendedLessons = document.querySelectorAll(".lessons-timeline__item-link");
const assessed = document.querySelectorAll(".lessons-timeline__item-link--success").length;
const onReview = document.querySelectorAll(".lessons-timeline__item-link--warning").length;
const toBeSubmitted = document.querySelectorAll(".lessons-timeline__item-link--danger").length;
let theLastLine = "";

if (onReview == 0 && toBeSubmitted == 0) {
  theLastLine = `Всі домашки(${assessed}) зроблені. Так тримати!`;
} else if (toBeSubmitted == 0 && onReview > 0) {
  theLastLine = `Всі домашки(${onReview}) на перевірці. Так тримати!`;
} else if (toBeSubmitted > 0 && onReview > 0) {
  theLastLine = `Домашок на перевірці: ${onReview}</br>Залишилось здати домашок: ${toBeSubmitted}`;
} else if (toBeSubmitted > 0 && onReview == 0) {
  theLastLine = `Залишилось здати домашок: ${toBeSubmitted}`;
}

textElement.insertAdjacentHTML(
  "beforeend",
  `<ul style="list-style: none">
<li>Пройдено уроків: ${attendedLessons.length}<li/>
<li>Залишилось уроків: ${allLessons.length - attendedLessons.length}<li/>
<li>${theLastLine}<li/>
</ul>`
);
