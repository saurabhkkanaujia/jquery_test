function addProduct(){
    document.getElementById('name1').style.border = "black 1px solid";
    document.getElementById('ph_no1').style.border = "black 1px solid";  


    var n = document.getElementById('name1').value;  
    var ph_no = document.getElementById('ph_no1').value;
    console.log(ph_no.toString().length)
    checkname(n);
    checknum(ph_no);
}

function checkname(n){
    if (n == "" || typeof n != 'string' || !isNaN(n)){
        document.getElementById('name1').style.border = "red 3px solid";
        document.getElementById('sidebar1').innerHTML = "Name Field is REquired";
    }
    else if (typeof n != 'string' || !isNaN(n)){
        document.getElementById('name1').style.border = "red 3px solid";
        document.getElementById('sidebar1').innerHTML = "Name must be string";
    }
    else{
        document.getElementById('sidebar1').innerHTML = "";

    }
}

function checknum(no){
    if (no == ""){
        document.getElementById('ph_no1').style.border = "red 3px solid";
        document.getElementById('sidebar2').innerHTML = "Number Field is required";
    }
    else if (isNaN(no)){
        document.getElementById('ph_no1').style.border = "red 3px solid";
        document.getElementById('sidebar2').innerHTML = "phone Number must be number";
    }
    else if (no.toString().length != 10){
        document.getElementById('ph_no1').style.border = "red 3px solid";
        document.getElementById('sidebar2').innerHTML = "Wrong Length";
    }
    else{
        document.getElementById('sidebar2').innerHTML = "";
    }
}
