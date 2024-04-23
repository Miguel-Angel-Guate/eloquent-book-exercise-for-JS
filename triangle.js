for (let i = "#"; i.length <= 7; i+= "#") {
    console.log(i)
}

let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    if(i % 3 != 0 && i % 5 != 0) output = "FIzzBuzz";
    console.log(`${i}- ${output}`);

    /* if(i % 3 == 0) printing += "FIZZ"
    if(i % 5 === 0) printing += "BUZZ" */