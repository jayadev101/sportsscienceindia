
var nsOptions =
{
    sliderId: "ninja-slider",
    transitionType: "zoom",
    autoAdvance: true,
    rewind: false,
    delay: 4000,
    transitionSpeed: 1000,
    aspectRatio: "2:1", // "?:100%" is for responsive scaling based on window height
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    pauseOnHover: false,
    keyboardNav: true,
    before: null,
    license: "mylicense"
};

var nslider = new NinjaSlider(nsOptions);


