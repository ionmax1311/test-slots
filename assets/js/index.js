$(".mouse").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(".icons").offset().top,
    },
    1000
  );
});

// accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// REVEALING ON SCROLL
const the_animation = selectAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// SCROLL TOP

$(".top-arrow").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $(".top-arrow").addClass("active");
  } else {
    $(".top-arrow").removeClass("active");
  }
});
