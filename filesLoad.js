var fileNames = ["file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt", "file6.txt", "file7.txt"];
var lineReader = [];

for(var x in fileNames) {
    var fileName = fileNames[x];

    lineReader[x] = readline.createInterface({
        input: fs.createReadStream(fileName)
    });

    lineReader[x].on('line', function(line) {
        setTimeout(function(){
            console.log("line");
        }, 100);
    });
}
