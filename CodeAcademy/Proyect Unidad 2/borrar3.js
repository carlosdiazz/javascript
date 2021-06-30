function unicos(arr) {
    let obj = {};
    let start, end;
    unicos_ = []
    // start = new Date();
    console.time('loop');
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (!obj[element]) { obj[element] = 0; }
        obj[element]++;
    }

    for (const key in obj) {
            if(obj[key] == 1) unicos_.push(key)
    }

    end = new Date();
    console.log("unicos_ --> ",unicos_);
    // console.log("El tiempo => ", (end - start));
    console.timeEnd('loop');
}


// arr = [2, 4, 6, 8, 10, 2, 6, 10];
arr = [];
algo=(n)=>{
    let index=0
    // console.log("s=");
    while (index++ < n) {
        a=(Math.round(Math.random(n)* n))
        console.log(a)
        arr.push(a);
    }
}
algo(10)
//console.log(" arrat ",arr);
const uno=unicos(arr);
const dos=unicos(arr);
const tres=unicos(arr);
const cuatro=unicos(arr);
const uno=unicos(arr);
const uno=unicos(arr);
const uno=unicos(arr);
