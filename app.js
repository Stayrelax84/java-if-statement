
var a = +prompt("Enter Your English Marks")
var b = +prompt("Enter Your Maths Marks")
var c = +prompt("Enter Your Science Marks")
var d = +prompt("Enter Your Social Studies Marks")
var e = +prompt("Enter Your Urdu Marks")

var f = a+b+c+d+e
var percentage = f / 500 * 100

if (percentage > 79.99) {
    alert(`"Excellent! You Got ${percentage}% and A+ Grade"`)
}
else if (percentage > 69.99){
    alert(`"Congratulation! ${percentage}% and A Grade"`)
}
else if (percentage > 59.99) {
    alert(`"Congratulation! You Got ${percentage}% and B Grade"`)
}
else if (percentage > 49.99){
    alert(`"Congratulation! You Got ${percentage}% and C Grade"`)
}
else{alert(`"Sorry You Got ${percentage}% and Fail"`)}