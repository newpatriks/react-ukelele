# Ukelele React Module

[Live example here](https://upbeat-mccarthy-d9d9b5.netlify.app/chords/A)


<img src="http://jllobet.me/wp-content/uploads/2020/05/react-ukelele.gif" width="350px" />

This is a very basic react module that generates the headstock and the strings of an Ukelele in svg. It can also build a chord using the `chord` parameter when it gets created.

## Install

```
npm install react-ukelele
```

## How to use
For render the component you just need to pass the `chord` prop. The list of chords available can be seen in [here](https://github.com/newpatriks/ukelele/blob/master/src/ukelele-chords.js)

```
render() {
  return(
    <Ukelele chord={'A'}/>
  )
}
```

## Want more?
For adding more chords (or customized ones) you can do so by updating the chord list mentioned above. The structure is the following:

A `chord` contains a list of fingers, and each one of the fingers can take 1 or more strings. The strings go from 1(highest) to 4(lowest).

So the `C` chord would be like this: 

```
C : [{
  string [1],
  fret: 2,
  fingerId: 1 // this can vary depending on the user
}]
```

A more complex chord like `G` (which it takes 3 fingers, each one in a different string):

```
G: [{
    string: [1],
    fret: 2,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [2],
    fret: 3,
    fingerId: 3
  }],
```

### Credits

Jordi Llobet | @newpatriks
