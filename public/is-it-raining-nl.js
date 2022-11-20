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
    "134824",
    "134828",
    "134834",
    "134843",
    "134855",
    "134856",
    "134870",
    "134878",
    "134881",
    "134889",
    "134892",
    "134919",
    "134941",
    "134949",
    "134964",
    "134969",
    "134980",
    "134986",
    "134990",
    "134994",
  ];

  $("#yes-text").append(emojis[Math.floor(Math.random() * emojis.length)]);

  $("body").css({
    "background-image": `url(rainy_images/${
      images[Math.floor(Math.random() * images.length)]
    }.webp)`,
  });
});
