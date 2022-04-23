let fiveLetters = [];
let first = [];
let second = [];
let third = [];
let fourth = [];
let fifth = [];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let totalMatches = [];
// let wordTotal = [];



function preload() {
    listOfWords = loadStrings('20k.txt');
}

function setup() {
    for (let i = 0; i < listOfWords.length; i++) {
        if (listOfWords[i].length == 5 && listOfWords[i].charAt(4) != "s") {
            fiveLetters.push(listOfWords[i])
        }
    }

    //console.log(fiveLetters);

    for (let i = 0; i < fiveLetters.length; i++) {
        first.push(0);
        second.push(0);
        third.push(0);
        fourth.push(0);
        fifth.push(0);
        totalMatches.push(0);
    }

    for (let i = 0; i < fiveLetters.length; i++) {
        for (let j = 0; j < fiveLetters.length; j++) {

            if (fiveLetters[i].charAt(0) == fiveLetters[j].charAt(0)) {
                var letterIndex = alphabet.indexOf(fiveLetters[j].charAt(1));
                first[i] += 1;
            }
            if (fiveLetters[i].charAt(1) == fiveLetters[j].charAt(1)) {
                var letterIndex = alphabet.indexOf(fiveLetters[j].charAt(1));
                second[i] += 1;
            }
            if (fiveLetters[i].charAt(2) == fiveLetters[j].charAt(2)) {
                var letterIndex = alphabet.indexOf(fiveLetters[j].charAt(2));
                third[i] += 1;
            }
            if (fiveLetters[i].charAt(3) == fiveLetters[j].charAt(3)) {
                var letterIndex = alphabet.indexOf(fiveLetters[j].charAt(3));
                fourth[i] += 1;
            }
            if (fiveLetters[i].charAt(4) == fiveLetters[j].charAt(4)) {
                var letterIndex = alphabet.indexOf(fiveLetters[j].charAt(4));
                fifth[i] += 1;
            }

        }
        // let wordMatches = [];
        // wordMatches = first.reduce((a, b) => a + b, 0);
        // let wordTotal = [];
        // wordTotal[i] += wordMatches;
        // // console.log(wordTotal)
        totalMatches[i] += first[i];
        totalMatches[i] += second[i];
        totalMatches[i] += third[i];
        totalMatches[i] += fourth[i];
        totalMatches[i] += fifth[i];

    }
    let bestWordNum = 0;
    var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

    for (var i = 1; i < totalMatches.length; i++) {
        for (var j = 0; j < i; j++) {
            if (totalMatches[i] > totalMatches[j]) {
                var x = totalMatches[i];
                totalMatches[i] = totalMatches[j];
                totalMatches[j] = x;

                var y = fiveLetters[i];
                fiveLetters[i] = fiveLetters[j];
                fiveLetters[j] = y;
            }
        }
    }
    //  console.log(totalMatches)
    // console.log(fiveLetters)

    for (let i = 0; i < fiveLetters.length; i++) {
        let li = createElement('li', fiveLetters[i]);
        li.parent('list');
    }


    // console.log(totalMatches)
    // for (let i = 0; i < totalMatches.length; i++) {
    //     if (totalMatches[i] > bestWordNum) {
    //         bestWordNum = i
    //     }
    // }
    // let highestToLowest = totalMatches.sort((a, b) => b - a);
    // console.log(highestToLowest)
    // for(let i = 0; i< totalMatches;i++){

    // }


    // console.log(bestWordNum);
    // console.log(fiveLetters[bestWordNum]);
    // console.log()



    //get most common letter in each letter position
    // for (let i = 0; i < fiveLetters.length; i++) {

    //     for (let j = 0; j < 26; j++) {
    //         if (fiveLetters[i].charAt(0) == alphabet[j]) {
    //             first[j] += 1;
    //         }
    //     }
    //     for (let j = 0; j < 26; j++) {
    //         if (fiveLetters[i].charAt(1) == alphabet[j]) {
    //             second[j] += 1;
    //         }
    //     }
    //     for (let j = 0; j < 26; j++) {
    //         if (fiveLetters[i].charAt(2) == alphabet[j]) {
    //             third[j] += 1;
    //         }
    //     }
    //     for (let j = 0; j < 26; j++) {
    //         if (fiveLetters[i].charAt(3) == alphabet[j]) {
    //             fourth[j] += 1;
    //         }
    //     }
    //     for (let j = 0; j < 26; j++) {
    //         if (fiveLetters[i].charAt(4) == alphabet[j]) {
    //             fifth[j] += 1;
    //         }
    //     }
    // }
    //     console.log(first);
    //     console.log(second);
    //     console.log(third);
    //     console.log(fourth);
    //     console.log(fifth);

    //     //get top most common letters
    //     for(let i = 0; i< 26; i++){
    //         if
    //     }

    //     //check if most common
    //     for (let i = 0; i < fiveLetters.length; i++) {
    //         for(let j = 0; j< 5; j++){
    //             if(fiveLetters[i].charAt[j] )

    //         }
    //     }
}