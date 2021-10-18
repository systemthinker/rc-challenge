(function () {
  const newIcon =
    '<a class="title-icon" href=""><i class="fas fa-info-circle"></i></a>';
  const classItemDescription = "article-item-desc";

  const targetIcon = document.querySelectorAll(".article-item-productinfo");
  const title = document.querySelectorAll(".article-item-title");
  const description = document.querySelectorAll(`.${classItemDescription}`);

  title.forEach(
    (el, index) =>
      (el.innerHTML +=
        " " +
        newIcon +
        `<div class='${classItemDescription}'>` +
        description[index].innerHTML +
        "</div>")
  );

  // remove previous icons and descriptions
  targetIcon.forEach((el) => el.remove());
  description.forEach((desc) => desc.remove());
})();
