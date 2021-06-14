
const setNumber = num => {
    if (num < 1000) return num
    num = num / 1000;
    return num + "K" 
}
export default setNumber;