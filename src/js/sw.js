importScripts("sw-cache-polyfill.js");

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("beadz").then(function (cache) {
      return cache.addAll([
        "./",
        "./css/style.css",
        "./js/app.js",
        "./sounds/crash.mp3",
        "./sounds/hat.mp3",
        "./sounds/kick.mp3",
        "./sounds/ride.mp3",
        "./sounds/snare_light.mp3",
        "./sounds/snare.mp3",
        "./sounds/sample_library/bassoon_sebastian/bassoon_half_1_out_A%234.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_half_2_out_C5.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_half_3_out_D5.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_quarter_1_out_B4.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_quarter_2_out_C5.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_quarter_3_out_D5.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_staccatto_1_out_A%234.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_staccatto_2_out_C5.wav",
        "./sounds/sample_library/bassoon_sebastian/bassoon_staccatto_3_out_C%235.wav",
        "./images/grip.svg",
        "./images/line.svg",
        "./images/tick.svg",
        "https://fonts.googleapis.com/css?family=Fredoka+One",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // return response || fetch(event.request);
      return fetch(event.request);
    })
  );
});
