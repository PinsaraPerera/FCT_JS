function calculate(){
    let leg1 = document.getElementById("input_1").value;
    let leg2 = document.getElementById("input_2").value;
    
    if(leg1 != null && leg2 != null && leg1 > 0 && leg2 > 0){
        let result = Math.sqrt((leg1**2)+(leg2**2));
        document.getElementById("answer").innerHTML = result;
    }else{
        document.getElementById("answer").innerHTML = "Please enter a valid value";
    }
}