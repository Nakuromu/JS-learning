 function includes(array, value){

    for (const item of array) {
        if (item === value) {
            return true;
        }
    }
    return false;
 }

 console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"))