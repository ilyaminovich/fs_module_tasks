function getFileData(fileSource){

    const fs = require('fs');
    if(fs.existsSync('./text.txt')){
    fileReaded = fs.readFileSync(fileSource, 'utf8');
    fileSplitted = fileReaded.split('\n')};

    fileSplitted.forEach((element, i) => {
        if(i % 2 !== 0){
            console.log(fileSplitted[i]);
        }
    });
}

getFileData("text.txt"); 