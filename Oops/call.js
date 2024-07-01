const setUserName = function(username){
    this.username = username
}

//if you will not use call and this over here than username will not be said to your provided value
// toh isme aisa horha h ki this keyword jo hai vo regiseterUser hi pass kraaa hai taki  reference jayee registerUser 

// agr stack ki term m dekhe to setUserName k varible usee call khtm hote hi khtm hojyge  
// isliye humne bola ki yh jo username h vo registerUser ka h toh usko stack s remove mt krna
// yh jo hai vo tb hi smjh m aayga agr apko stack or global exectuion context functional execution context pta h toh hii


//iska mtlb ek or tarike s dekh skte h mtlb ki setUserName chla jayga toh uska things jo h vo registerUser ko deke jyga
const registerUser = function(username,email,password){
    setUserName.call(this,username) 
    this.password = password
    this.email = email
}
const newUser = new registerUser("ritul","ritul@meta.com",123)
console.log(newUser);