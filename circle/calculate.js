function calculate(){
    let r = document.getElementById("input_1").value;
    const pi = 3.14;

    let perimeter = 2*pi*r;
    let area = pi*r*r;

    if(r != null && r >= 0){
        document.getElementById("perimeter").innerHTML = perimeter;
        document.getElementById("area").innerHTML = area;
    }else{
        document.getElementById("perimeter").innerHTML = "Please enter a valid value";
        document.getElementById("area").innerHTML = "Please enter a valid value";
    }
}