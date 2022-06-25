  let Icon = document.querySelector('.top1 > .temp');
  console.log(Icon);
  Icon.addEventListener('mouseover', () => {
    document.querySelector('.tempBar').classList.remove('hide');
  });

  let Icon2 = document.querySelector('.top1 > .reso');
  Icon2.addEventListener('mouseover', () => {
    const modal = document.querySelector('.resoBar');
    modal.classList.remove('hide');
  });

  let Icon3 = document.querySelector('.topNavBar > .menuBtn')
  Icon3.addEventListener('click', () => {

    let mobileMenu = document.querySelector('.mobileMenu')
    mobileMenu.classList.toggle("hide");
  });


  window.addEventListener('mouseover', event => {
    let current = event.composedPath()[0]
    let list = current.classList;

    if (!list.contains('temp') && !list.contains('tB') && !list.contains('top1') && !list.contains('topNavBar')) {
      document.querySelector('.tempBar').classList.add('hide');
    }

    if (!list.contains('reso') && !list.contains('rB') && !list.contains('top1') && !list.contains('topNavBar')) {
      document.querySelector('.resoBar').classList.add('hide');
    }
  });

  window.addEventListener('click', event => {
    let current = event.composedPath()[0]
    let list = current.classList;

    if (!list.contains("mobileMenu") && !list.contains("menuLink") && !list.contains("menuBtn") && !list.contains("menuList")) {
      document.querySelector('.mobileMenu').classList.add("hide");
    }
  });

  let slideCount = 1;
  let prevSlide = null;
  let prevDir = null;

  const moveSlides = (num, side) => {
    if (num === 1) {
      if (side === "right") {
        document.querySelector('.slider .first').classList.add("rightIn");
        prevDir = "right";
      } else if (side === "left") {
        document.querySelector('.slider .first').classList.add("leftIn");
        prevDir = "left"
      }

      document.querySelector('.slider .first').classList.remove("hide");
      document.querySelector('.slider .second').classList.add("hide");
      document.querySelector('.slider .third').classList.add("hide");

      prevSlide = 1;
    }
    else if (num === 2) {
      if (side === "right") {
        document.querySelector('.slider .second').classList.add("rightIn");
        prevDir = "right";
      } else if (side === "left") {
        document.querySelector('.slider .second').classList.add("leftIn");
        prevDir = "left"
      }

      document.querySelector('.slider .first').classList.add("hide");
      document.querySelector('.slider .second').classList.remove("hide");
      document.querySelector('.slider .third').classList.add("hide");

      prevSlide = 2;
    }
    else if (num === 3) {
      if (side === "right") {
        document.querySelector('.slider .third').classList.add("rightIn");
        prevDir = "right";
      } else if (side === "left") {
        document.querySelector('.slider .third').classList.add("leftIn");
        prevDir = "left"
      }

      document.querySelector('.slider .first').classList.add("hide");
      document.querySelector('.slider .second').classList.add("hide");
      document.querySelector('.slider .third').classList.remove("hide");

      prevSlide = 3;
    }
  }

  const resetSlide = (slide, dir) => {
    if (slide === null || dir === null) {return}
    let current;

    if (slide === 1) {
      current = document.querySelector('.slider .first');

      if (dir === "right") {
        current.classList.remove("rightIn");
      } else if (dir === "left") {
        current.classList.remove("leftIn");
      }

    } else if (slide === 2) {
      current = document.querySelector('.slider .second')

      if (dir === "right") {
        current.classList.remove("rightIn");
      } else if (dir === "left") {
        current.classList.remove("leftIn");
      }

    } else if (slide === 3) {
      current = document.querySelector('.slider .third')

      if (dir === "right") {
        current.classList.remove("rightIn");
      } else if (dir === "left") {
        current.classList.remove("leftIn");
      }
    }
  }

  let leftButton = document.querySelector(".slider .left");
  console.log(leftButton);

  leftButton.addEventListener("click", () => {
    slideCount--;

    if (slideCount < 1) {slideCount = 3;}

    resetSlide(prevSlide, prevDir);
    moveSlides(slideCount, "left");
  });

  let rightButton = document.querySelector(".slider .right");
  rightButton.addEventListener("click", () => {
    slideCount++;

    if (slideCount > 3) {slideCount = 1}

    resetSlide(prevSlide, prevDir);
    moveSlides(slideCount, "right");
  });
