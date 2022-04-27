const tj = require("@tmcw/togeojson");
const fs = require("fs");
// node doesn't have xml parsing or a dom. use xmldom
const DOMParser = require("xmldom").DOMParser;

const kml = new DOMParser().parseFromString(fs.readFileSync("./file/Florianopolis.kml", "utf8"));

const converted = tj.kml(kml);

fs.writeFile("./file/FlorianopolisTest.kml", JSON.stringify(converted), (err) => {
    if (err){
      console.log(err);
    } else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("./file/FlorianopolisTest.kml", "utf8"));
    }
});
console.log(converted);

