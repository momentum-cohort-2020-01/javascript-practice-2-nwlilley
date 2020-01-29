// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

    // function remove (memberList, member) {
    //     let memberIndex = memberList.indexOf(member);
    //     if (memberList.includes(member)) {
    //         memberList.splice(memberIndex, 1);
    //     } else {
    //         return memberList;
    //     }
    //     return memberList;
    // }

// function remove (memberList, member) {
//     for (i = 0; i < memberList.length; i++) {
//         if (memberList[i] == member) {
//             memberList.splice(memberList.indexOf(member), 1);
//     }
//     return memberList
//     }
// }

function remove (memberList, member) {
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i] == member) {
            memberList.splice(i, 1);
        }
    }     
    return memberList;
} 
    // 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove (memberList, member) {
    if (memberList.includes(member)) {
        let newList = memberList.slice();
        for (let i = 0; i < newList.length; i++) {
                if (newList[i] == member) {
                    newList.splice(i, 1);
            } 
        }
        return newList;
    } else {
        return memberList;
    }    
} 
// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i ++) {
        total += array[i]
    }
    return total;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// function average (array) {
//     total = sum(array);
//     average = total/array.length;
//     return average;
// }

// function average(array) {
//     let total = 0
//     if (array.length > 0) {
//         for (let i = 0; i < array.length; i ++) {
//         total += array[i]
//         let boop = total/array.length;
//         return boop;
//         }
//     } else {
//         let boop = NaN;
//         return boop;
//     } 
// }
function average(array) {
    let total = 0
    if (array.length > 0) {
        for (let i = 0; i < array.length; i ++) {
        total += array[i]
    }
    return total/array.length;
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.


function minimum (array) {
    let minValue = Infinity;
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        }  
        return minValue;
    }
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//

function selectionSort(array) {
    let copyArray = array.slice()
    let orderedArray = []
    while (copyArray.length > 0) {
        let num = minimum(copyArray)
        orderedArray.push(num)
        copyArray.splice(copyArray.indexOf(num), 1)
    }
    return orderedArray;
}

// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// function selectionSort(array) {
//     let arrayCopy = array.slice()
//     let orderedArray = []
//     for (let i = 0; i < arrayCopy.length; i++) {
//         let minNum = minimum(arrayCopy)
//         let minNumIndex = arrayCopy.indexOf(minNum)
//         orderedArray.push(minNum)
//         arrayCopy.splice(minNumIndex, 1)
//     }
//     return orderedArray;
//  }



// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.


function textList (array) {
    let string= "";
    if (array.length < 1) {
        string = "";
    } else if (array.length == 1) {
        string = array[0]
    } else {
            for (let i = 0; i < array.length - 1; i++) {
                string += array[i] + ",";
        }
        string += array[array.length - 1];
    }    
    return string
}

