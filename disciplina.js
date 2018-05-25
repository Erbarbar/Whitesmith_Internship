(function()
{
    window.addEventListener("load", main);
}());

function main(){
    var ano = queryString("year");
    console.log("fim da query");



    var course_fisica = document.getElementById("course_fisica");
    var course_biologia = document.getElementById("course_biologia");
    var course_matematica = document.getElementById("course_matematica");

    var evt = function(ev){
        switch(ev.target.id){
            case "course_fisica":
                window.location = ("game.html?year=" + ano +"?course=fisica");
                break;
            case "course_biologia":
                window.location = ("game.html?year=" + ano +"?course=biologia");
                break;
            case "course_matematica":
                window.location = ("game.html?year=" + ano +"?course=matematica");
                break;
        }
    }

    course_fisica.addEventListener("click",evt);
    course_biologia.addEventListener("click",evt);
    course_matematica.addEventListener("click",evt);

} // main

function queryString(parameter){
    var loc = location.search.substring(1,location.search.length);
    var param_value = false;
    var params = loc.split("?");
    for(i=0; i<params.length; i++){
        param_name = params[i].substring(0,params[i].indexOf("="));
        if(param_name == parameter){
            param_value = params[i].substring(params[i].indexOf("=")+1);
        }
    }
    console.log(param_value);
    if(param_value)
        return param_value;
    else
        return 0;
}


