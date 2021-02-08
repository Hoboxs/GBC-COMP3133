var fs = require('fs');
var csv = require('csv-parser');

var readStream = fs.createReadStream('input_countries.csv');
var canadaWrite = fs.createWriteStream('canada.txt');
var usaWrite = fs.createWriteStream('usa.txt');
canadaWrite.write('country,year,population\n', 'UTF8')
usaWrite.write('country,year,population\n', 'UTF8')

readCsv();

function readCsv() {
    readStream.pipe(csv())
    .on('data', (row) => {
        writeTxt(row)
    })
    .on('end', () => {
        canadaWrite.end()
        usaWrite.end()
    })
}

function writeTxt(row) {
    var txt = row.country + ',' + row.year + ',' + row.population + '\n'

    if (row.country == 'Canada'){
        canadaWrite.write(txt, 'UTF8')
    }
    if (row.country == 'United States'){
        usaWrite.write(txt, 'UTF8')                
    }

    return;
}
  
  