document.addEventListener("DOMContentLoaded", function () {
  var emojis = [
    "🌧",
    "🌦",
    "🌂",
    "💦",
    "💧",
    "😶‍🌫️",
    "☁️",
    "💨",
    "⚡️",
    "🌩",
    "⛈",
    "☔️",
    "❄️",
    "🌨",
    "☃️",
    "❅",
    "⛄",
  ];

  var images = [
    "134824.jpg",
    "134828.jpg",
    "134834.jpg",
    "134843.jpg",
    "134855.jpg",
    "134856.jpg",
    "134870.jpg",
    "134878.jpg",
    "134881.jpg",
    "134889.jpg",
    "134892.jpg",
    "134919.jpg",
    "134941.jpg",
    "134949.jpg",
    "134964.jpg",
    "134969.jpg",
    "134980.jpg",
    "134986.jpg",
    "134990.jpg",
    "134994.jpg",
  ];

  $("#yes-text")
    .append(emojis[Math.floor(Math.random() * emojis.length)]);

  $("body").css({
    "background-image": `url(rainy_images/${images[Math.floor(Math.random() * images.length)]})`,
  });
});
