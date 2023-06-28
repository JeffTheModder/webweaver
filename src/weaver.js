// pack files into one
function weave(files, metadata) {
    
    return file;
}

// split array into 2, alternating every other item
function alt_split(og) {
    var array1 = [];
    var array2 = [];
    
    for (var i = 0; i < originalArray.length; i++) {
        if (i % 2 === 0) {
            array1.push(originalArray[i]);
        } else {
            array2.push(originalArray[i]);
        }
    }

    return resultArray;
}

// parse metadata
function parse_metadata(md) {
    let items = md.split("\n");
    let metadata = {};

    for (let i = 0; i < items.length; i++) {
        let block = items[i].match(/\/\/\s*(?<key>.*?):\s*(?<data>.*)/);
        let key = block.groups.key;
        let data = block.groups.data;
        metadata[key] = data;
    }

    return metadata;
}

// unpack files into its counterparts
function unweave(file) {
    let threads = file.split("// <METADATA>")

    let [f, md] = alt_split(threads);

    metadata = parse_metadata(md);

    let files = f.map(function(value, index) {
        return {file: value.trim(), metadata: metadata[index]};
    });

    return files;
}