export default (number) => {
    return number.toLocaleString('en-US', {maximumFractionDigits:2});
}