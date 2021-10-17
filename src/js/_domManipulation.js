(function () {
  const newIcon =
    '<a class="title-icon" href=""><i class="fas fa-info-circle"></i></a>';

  const targetIcon = document.querySelectorAll('.article-item-productinfo');
  const testIcon = document.querySelector('.article-item-img');
  const title = document.querySelectorAll('.article-item-title');
  console.log('target i', targetIcon[0].outerHTML);
  console.log('testicon', testIcon);

  const description = document.querySelectorAll('.article-item-desc');

  title.forEach(
    (el, index) =>
      (el.innerHTML +=
        ' ' +
        newIcon +
        '<div className = "article-item-desc">' +
        description[index].innerHTML +
        '</div>')
  );
  console.log(
    'what is title',
    title.forEach((el) => console.log(el))
  );

  // remove previous icons
  targetIcon.forEach((el) => el.remove());
})();
// const appendStyles = (href) => {
//   const head = document.head;
//   const link = document.createElement("link");
//   link.type = "text/css";
//   link.rel = "stylesheet";
//   link.href = href;

//   head.appendChild(link);
// };
