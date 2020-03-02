const fs = require('fs');

function getFileData(fileSource) {

    if (fs.existsSync('./text.txt')) {

        const fileReaded = fs.readFileSync(fileSource, 'utf8'),
            fileSplitted = fileReaded.split('\n');
        fileSplitted.forEach((element, i) => {
            if (i % 2 !== 0) {
                console.log(fileSplitted[i]);
            }
        });
    } else {
        console.log("There is no file")
    };
}

getFileData("text.txt");