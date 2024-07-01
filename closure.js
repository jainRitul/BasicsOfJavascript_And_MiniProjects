function myfun(){
    const name = "ritul"
    function displayName(){
        console.log(name);
    }
    return displayName
}

//jb displayName return  hoga toh uske sath uska pura lexical scope
// bhi return hoga mtlb ki outer function bhi return hoga

const fun = myfun()
console.log(fun());
