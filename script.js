    // Problem 1 (Make Negative)
    
    //  function invert (p1) {
    //     if (p1 > 0) console.log(p1 * -1); 
    //     else console.log(p1);}

    //     invert(-19)
        
    // Problem 2 (Sum of positive)
    
    
    // function sumPositive( ARRAY HERE ){
    //     if (NUMBER IN ARRAY IS POSITIVE > 0) console.log(SUM OF POSITIVE NUMBERS);
    //     else console.log(0);}

    //     sumPositive( ARRAY HERE )

    function addPositives () {
        let addPositives = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > 0) {
                addPositives += arguments[i];
            }
        }
        console.log(addPositives);
    }

    let arguments = addPositives.apply(null, [5, 10, 15, 30, -75]);

    console.log(arguments)