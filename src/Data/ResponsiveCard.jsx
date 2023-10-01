
export let settings2 = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      },
    },
    {
      breakpoint: 800,
      settings: {
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


export let settings4 = {
    //dots: true,
    focusOnSelect: true,
    infinite: true,
  
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 900,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };