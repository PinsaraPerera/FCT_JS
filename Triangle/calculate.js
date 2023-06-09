function calculate(){
    let base = document.getElementById("input_1").value;
    let height = document.getElementById("input_2").value;
    
    if(base != null && height != null && base > 0 && height > 0){
        let result = 0.5*base*height;
        document.getElementById("answer").innerHTML = result;
    }else{
        document.getElementById("answer").innerHTML = "Please enter a valid values";
    }
}