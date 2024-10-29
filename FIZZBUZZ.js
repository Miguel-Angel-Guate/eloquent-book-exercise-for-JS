for (let i = 0; i <= 100; i++) {
    let printing = (i % 3 == 0 ? "FIZZ" : "") + (i % 5 == 0 ? "BUZZ" : "");
    console.log(`${i} -- ${printing || i}`);
    /* let printing = "";
    if (i % 3 == 0) printing += "Fizz";
    if (i % 5 == 0) printing += "Buzz";
    if(i % 3 != 0 && i % 5 != 0) printing = "FIzzBuzz";
    console.log(`${i}- ${printing}`); */

}