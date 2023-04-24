function show(num){
    document.getElementById("box").value += num;
}

function remove(){
    var valuess = document.getElementById("box").value;
    var values = String(valuess);
    var result = values.slice(0,values.length-1);
    document.getElementById("box").value = result;
}
function allClear(){
    document.getElementById("box").value = "";
    document.getElementById("old").textContent = "";

}

function result(){
    var res = document.getElementById("box").value;
    if(res == ""){
        document.getElementById("box").value = "Please provide some expressions";
    }
    else{
        document.getElementById("box").value = eval(res);
        document.getElementById("old").textContent = res;
    }
    console.log(res);
}