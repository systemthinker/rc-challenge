(function () {
  const icon = '<a class="title-icon" href=""><i class="fas fa-info-circle"></i></a>';
  const targetIcon = document.querySelectorAll('.article-item-productinfo');
  const title = document.querySelectorAll('.article-item-title');
  targetIcon.forEach((el) => el.remove());

  title.forEach((el, index) => (el.innerHTML += icon));
  console.log(
    'what is title',
    title.forEach((el) => console.log(el))
  );
})();
// const appendStyles = (href) => {
//   const head = document.head;
//   const link = document.createElement("link");
//   link.type = "text/css";
//   link.rel = "stylesheet";
//   link.href = href;

//   head.appendChild(link);
// };
