// пикча
    function changeImage() {
      var image = document.getElementById("bonfire");
      image.src = "https://media.discordapp.net/attachments/1108454928936075264/1118148078550139050/rsz_img_20230610_135957.png?width=161&height=185";
      image.alt = "jizaaa";
    }
// фразы
var phrases = [
    // хз кто
    "Bonfire like sex, it's need but not much.",
    "Imagine the most comfortable guild with Bonfire.",
    "Lendory крут!",
    "https://youtu.be/dQw4w9WgXcQ",
    "Hello World!",
    "сломанный ублюдок, я родился в рефлексии",
    "аа манулы ахуенынйееый",
    "апните бота на мониторингах, прошу",
    "майним на мышках",
    "перезагрузи страницу, чтоб текст изменился",
    "завтра v0.2.0",
    // n3k0
    "кака макака эта неко кака макака",
    "а вы знали что бот фигня??",
    "я удалил бота 👿",
    "✔ верифиед сайт",
    "овн дискорд продукшон, маде ин чайник",
    "подайте денег на хост",
    //manul
    "https://discord.gg/96F6Vf3ZWR",
    "\"Bobfire\" (c) Manul",
    "\"v0.2.0a\" (c) Manul",
    "\"このニシキヘビをクソくらえ！\" (c) Manul",
    "\"пуки каки какашки я норфорде\" (c) хз кто",
    // Lendory
    "бонфайр конечно крутой, но манулы круч"
  ];

  function getRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  var randomTextElement = document.getElementById("randomText");
  randomTextElement.innerText = getRandomPhrase();
        // крч да


(function () {
  let titles = [
      "B",
      "Bo",
      "Bon",
      "Bonf",
      "Bonfi",
      "Bonfir",
      "Bonfire"

  ];

  let citates = [

  ];

  let titleIndex = 0;

  function changeTitle() {
      document.title = titles[titleIndex];
      titleIndex = (titleIndex + 1) % titles.length;
  }


  setInterval(changeTitle, 500);
})();

