const fs = require('fs');

function jsonFunc(fileSource){

    fileReaded = fs.readFileSync(fileSource, "utf8");
    fileParsed = JSON.parse(fileReaded);
    checkConditions(fileParsed);

}

function checkConditions(obj){

    const failedConditions = [],
    keyAndValueOfObject = Object.entries(obj);
    let counter = 0;

    typeof obj.flag === typeof true ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[0].toString().replace(`,`,`:"`) + `"` + '\n');

    Array.isArray(obj.myPromises) ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[1].toString().replace(`,`,`:"`) + `"` + '\n');
    
    typeof obj.element === typeof obj ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[2].toString().replace(`,`,`:"`) + `"` + '\n');

    Object.is(obj.screenshot, null) ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[3].toString().replace(`,`,`:"`) + `"` + '\n');

    typeof obj.elementText === typeof "string" ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[4].toString().replace(`,`,`:"`) + `"` + '\n');

    obj.allElementsText.includes("const") ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[5].toString().replace(`,`,`:"`) + `"` + '\n');

    obj.counter > 10 ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[6].toString().replace(`,`,`:"`) + `"` + '\n');

    obj.config === "Common" ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[7].toString().replace(`,`,`:"`) + `"` + '\n');

    obj.const.toUpperCase() === "FIRst".toUpperCase() ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[8].toString().replace(`,`,`:"`) + `"` + '\n');

    Array.isArray(obj.parameters) && obj.parameters.length == 8 && obj.parameters.every(element => typeof element === typeof 'string') ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[9].toString().replace(`,`,`:"`) + `"` + '\n');

    typeof obj.description === typeof 'string' && obj.description.length > 5 && obj.description.length < 13 ? counter++ : failedConditions.push(`"` + keyAndValueOfObject[10].toString().replace(`,`,`:"`) + `"`);

    if(counter === 11){
        console.log('OK')
    }

    fs.writeFileSync('jsonFails.txt', failedConditions.toString().replace(`,`,``).replace(`,`,``));
}

jsonFunc("myjson.json");