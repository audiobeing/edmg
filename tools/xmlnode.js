const parser = require('xml2json');
const fs = require('fs'); 

var xmlData = fs.readFileSync('edis-coding.xml');
const jsonResult = parser.toJson(xmlData);
var dvn = JSON.parse(jsonResult).Workbook.Worksheet[0]; 
console.log(dvn['ss:Name']); 
for(var i = 0; i<dvn.Table.Row.length; i++){
    var cells = dvn.Table.Row[i].Cell; 
    // console.log(cells)
    cells.forEach((cell)=>{if(cell.Data){console.log(cell.Data.$t)}})
    // console.log(dvn.Table.Row[i].Cell); 
}
// console.log(dvn.Table.Row[0].Cell); 


// fs.readFile( './edis.xml', function(err, data) {
//     // var json = parser.toJson(data);
//     // console.log("to json ->", data);
//     // const jsonResult = convert.xml2json(data, {
//     //     compact: true,
//     //     spaces: 2
//     // });

//     console.log(data);
//  });



// const xmlData = `
// <data>
//     <organization>GeeksforGeeks</organization>
//     <founder>Sandeep Jain</founder>
//     <location>Noida</location>
// </data>
// `;

// const jsonResult = convert.xml2json(xmlData, {
//     compact: true,
//     spaces: 2
// });

// console.log(jsonResult);