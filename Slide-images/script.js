const slides = document.querySelectorAll(".slide");
let counter = 0;
let total = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  if (counter === total - 1) {
    counter;
    // shiftImages();
  } else {
    counter++;
    shiftImages();
  }
};
const goPrev = () => {
  counter--;
  shiftImages();
};

const shiftImages = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const interval = () => {
  setInterval(() => {
    if (!(counter + 1 == total)) {
      counter++;
      shiftImages();
    } else {
      if (!(total == 0)) {
        setInterval(() => {
          counter--;
          shiftImages();
        }, 2000);
      }
    }
  }, 2000);
};

setInterval(interval(), 2000);

// setInterval(() => {
//   if (!(counter + 1 == total)) {
//     counter++;
//     shiftImages();
//   } else {
//     if (!(total == 0)) {
//       setInterval(() => {
//         counter--;
//         shiftImages();
//       }, 2000);
//     }
//   }
//}, 2000);
