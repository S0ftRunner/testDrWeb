const phoneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("phone-img-animation");
    }
  });
});

const tableObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("table-img-animation");
    }
  });
});

const presentationDecorationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("decoration__presentation-animation");
    }
  });
});

const informationSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("information__section-animation");
    }
  });
});

tableObserver.observe(document.querySelector(".table-img"));
phoneObserver.observe(document.querySelector(".phone-img"));
presentationDecorationObserver.observe(
  document.querySelector(".decoration__presentation")
);
informationSectionObserver.observe(document.querySelector('.information__section'));
