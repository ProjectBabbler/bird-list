# bird-list
Api for database of birds

## How to use

```
npm install --save bird-list
```

```
var birdList = require('bird-list');

birdList.getBySpeciesCode(code).then((data) => {
    // Metadata for a bird
    console.log(data);
}).catch((error) => {
    console.log(error);
})
```

## API

### getBySpeciesCode(code)
Return meta data for a bird

```
    birdList.getBySpeciesCode(code)
```