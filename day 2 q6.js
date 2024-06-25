let num = [20,30,50]

function sumall(sum , num){


    return sum + num

}

function proall(product , num){


    return product * num

}

console.log(num.reduce(sumall))
console.log(num.reduce(proall))