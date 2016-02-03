// TODO: Create an array called `simplifiedPhotographs` that takes `photographs` and transforms each one into an object with only two properties: `caption` and `url`.

var simplifiedPhotographs = photographs.map(function (photograph) {
  return {
    caption: photograph.caption.text,
    url: photograph.images.low_resolution.url
  }
});

// TODO: Create an array called `photographElements` that takes `simplifiedPhotographs` and transforms each one into a DOM element.

var photographElements = simplifiedPhotographs.map(createImageElementFromPhotograph);
