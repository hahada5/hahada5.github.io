<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="jquery.backstretch.min.js"></script>
<script>
  // To attach Backstrech as the body's background
  $.backstretch("path/to/image.jpg");

  // You may also attach Backstretch to a block-level element
  $(".foo").backstretch("path/to/image.jpg");

  // If your element defines a background image with CSS, you can omit the argement altogether
  $(".foo").backstretch();

  // Or, to start a slideshow, just pass in an array of images
  $(".foo").backstretch([
    "path/to/image.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg"
  ], {duration: 4000});

  // Or, to load from a url that can accept a resolution and provide the best image for that resolution
  $(".foo").backstretch([
    "path/to/image.jpg?width={width}&height={height}"
  ]);

  // Or, to automatically choose from a set of resolutions.
  // The width is the width of the image, and the algorithm chooses the best fit.
  $(".foo").backstretch([
    [
      { width: 1080, url: "path/to/image1_1080.jpg" },
      { width: 720, url: "path/to/image1_720.jpg" },
      { width: 320, url: "path/to/image1_320.jpg" }
    ],
    [
      { width: 1080, url: "path/to/image2_1080.jpg" },
      { width: 720, url: "path/to/image2_720.jpg" },
      { width: 320, url: "path/to/image2_320.jpg" }
    ]
  ]);

  // If we wanted to specify different images for different pixel-ratios:
  $(".foo").backstretch([
    [
      // Will only be chosed for a @2x device
      { width: 1080, url: "path/to/image1_1080@2x.jpg", pixelRatio: 2 },

      // Will only be chosed for a @1x device
      { width: 1080, url: "path/to/image1_1080.jpg", pixelRatio: 1 },

      { width: 720, url: "path/to/image1_720@2x.jpg", pixelRatio: 2 },
      { width: 720, url: "path/to/image1_720.jpg", pixelRatio: 1 },
      { width: 320, url: "path/to/image1_320@2x.jpg",  pixelRatio: 2 },
      { width: 320, url: "path/to/image1_320.jpg", pixelRatio: 1 }
    ]
  ]);

  // If we wanted the browser to automatically choose from a set of resolutions,
  // While considering the pixel-ratio of the device
  $(".foo").backstretch([
    [
      // Will be chosen for a 2160 device or a 1080*2 device
      { width: 2160, url: "path/to/image1_2160.jpg", pixelRatio: "auto" },

      // Will be chosen for a 1080 device or a 540*2 device
      { width: 1080, url: "path/to/image1_1080.jpg", pixelRatio: "auto" },

      // Will be chosen for a 1440 device or a 720*2 device
      { width: 1440, url: "path/to/image1_1440.jpg", pixelRatio: "auto" },
      { width: 720, url: "path/to/image1_720.jpg", pixelRatio: "auto" },
      { width: 640, url: "path/to/image1_640.jpg", pixelRatio: "auto" },
      { width: 320, url: "path/to/image1_320.jpg", pixelRatio: "auto" }
    ]
  ]);
</script>
