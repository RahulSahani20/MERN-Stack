let arr = [9 , 33 , 34 , 23 , 45 , 56];

let n = arr.length

function firstindex(num,n){

    for (let i = 0; i < n ; i++){

        if (num[i] > 10){

            return i

        }

    }

    return -1

}
console.log(firstindex(arr,n))

