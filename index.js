function newInput(collection) {
    return (Array.isArray(collection)) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const newCollection = newInput(collection);

    for(let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection = newInput(collection)
    const newArray = []

    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let newCollection = newInput(collection)
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    const length = newCollection.length

    for (let i =0; i < length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    const newCollection = newInput(collection)

    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) return newCollection[i]
        }

        return undefined
}

function myFilter(collection, predicate) {
    const newCollection = newInput(collection)

    const newArray = []

    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) newArray.push(newCollection[i])
        }

        return newArray
}

function mySize(collection) {
    const newCollection = newInput(collection)
    return newCollection.length
}

function myFirst(array, stop=false) {
    return (stop) ? array.slice(0, stop) : array[0];
  }

  function myLast(array, start=false) {
    return (start) ? array.slice(array.length-start, array.length) : array[array.length-1];
  }

 function myKeys(object) {
    const keys = [];
    for (let key in object){
      keys.push(key);
    }
    return keys;
  }

  function myValues(object) {
    const values = [];
    for (let key in object){
      values.push(object[key]);
    }
    return values;
  
  }

