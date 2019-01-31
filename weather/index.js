const xml2js = require('xml2js');
const fs = require('fs')

const parser = new xml2js.Parser();
parser.parseString(xml, function(err,result){
  const filename = "weather.json"
  fs.writeFile(filename,JSON.stringify(result), (err) => {
      if(err) throw err
      console.log(filename + " Save!")
  })
});