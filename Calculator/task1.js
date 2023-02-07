let output=document.getElementById("put");
function display(num){
    output.value+=num;
}
function calculate(){
    try{
        output.value = eval(output.value) 
    }
    catch(err){
        alert("Invalid entry")
    }
}
function Clear(){
    output.value = "";
}
function del(){
    output.value=output.value.slice(0,-1);
}
