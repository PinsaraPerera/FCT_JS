function calculate(){
    let r = document.getElementById("input_1").value;
    let h = document.getElementById("input_2").value;

    const pi = 3.14;
    
    if(r != null && h != null && r > 0 && h > 0){
        let volume = pi*r*r*h;
        document.getElementById("answer").innerHTML = volume;
    }else{
        document.getElementById("answer").innerHTML = "Please enter a valid value";
    }
}