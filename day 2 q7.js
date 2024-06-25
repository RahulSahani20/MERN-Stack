function ssorted(arr) {

    arr.sort((a, b) => a.length - b.length);
    
    console.log(...arr);

    }

let arr = ["kolkata" , "delhi" , "goa"]

ssorted(arr);