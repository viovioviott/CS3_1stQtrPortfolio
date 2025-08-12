//no script tag needed here?

var age = window.prompt("What is your current age? : ", "14");
var maxAge = window.prompt("What do you think would be your maximum age? : ", "60");
var numPerDay = window.prompt("Now, how many cookies per day do you think you could eat? : ", "3");
let sure = confirm("Are your values " + age + ", " + maxAge + ", and " + numPerDay + " correct?")

if (sure == true) {
    var totalRequired = (numPerDay * 365) * (maxAge - age) 
    document.write("You will need " + totalRequired + " cookies to last you until the ripe old age of " + maxAge)
}

else {
    alert("Run your code")
}
