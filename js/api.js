fetch('https://31.javascript.htmlacademy.pro/code-and-magick/data')
  .then((response) => response.json())
  .then((wizards) => {
    console.log(wizards);
  });
