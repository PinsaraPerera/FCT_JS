function calculate_age(){
    let date = new Date(document.getElementById("input_1").value);
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let answer = current_year - year;

    if(answer != null && answer > 0){
        document.getElementById("answer").innerHTML = "Your Age is : " + answer;
    }else{
        document.getElementById("answer").innerHTML = "Please Enter a valid Ending date ";
    }
}