export const isAdult = (x) => {
    if(x>18){
        return true
    }
    else{
        return false
    }
}

export const canDrink =(x) => {
    if(x>21){
        return true
    }
    else{
        return false
    }
}
export default (age) => age>=65


//export {isSenior as default}