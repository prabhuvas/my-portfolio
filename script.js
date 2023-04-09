document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 100;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});


// element references
const navbar = document.querySelector(".navbar");
const spot = document.querySelector(".spot");

const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  if (spotIsVisible) navbar.classList.remove("fixed-top");
  else navbar.classList.add("fixed-top");
};
const options = {
  root: null, 
  rootMargin: "0px", 
  threshhold: 0, 
};

// initialize and start the observer.
const observer = new IntersectionObserver(handleScroll, options);
observer.observe(spot);