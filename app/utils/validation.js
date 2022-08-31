
export function isValidEmail(email){
    console.log("email s=-=-=-=>> ",email)
    const emailPatten = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailPatten.test(email)
}

export function isValidPassword(password){
    const passwordpatten =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return  passwordpatten.test(password)
}