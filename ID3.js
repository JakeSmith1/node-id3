var nodeID3 = require('node-id3');

//enter title and artist names here, and a filePath relative to this file
var title = '';
var artist = '';
var filePath = __dirname + '/';

var tags = {
  title: title,
  artist: artist
}

nodeID3.removeTags(filePath)

//Pass tags and filepath
var success = nodeID3.write(tags, filePath);

//returns true if written correctly
console.log(success);

//Pass filepath/buffer
var read = nodeID3.read(filePath);

//returns tags
console.log(read);


//see https://npmdaily.com/pkg/node-id3 for more tag options
