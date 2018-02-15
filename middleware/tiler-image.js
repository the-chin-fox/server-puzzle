

var tile = require('image-tiler').tile;
var tilePromise = tile(req.localFile, 'output/', '{z},{x},{y}.png');
tilePromise.then(() => console.log('Finished.'))
.catch((error) => console.log('Error', error));
// Output tiles will look like: output/folder/save_pattern_0/tile_0_0.png etc.

module.exports = tilePromise
