const fs = require("fs");
fs.mkdir("wtlab", (err) => {
  if (err) {
    console.error(err);
  }
});
fs.writeFile("wtlab/file1.txt", "They will cower", (err) => {
  if (err) {
    console.error(err);
  }
});

fs.writeFile("wtlab/file2.txt", "Here Comes the party!", (err) => {
  if (err) {
    console.error(err);
  }
});
fs.readdir("wtlab", (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(files);
  }
});