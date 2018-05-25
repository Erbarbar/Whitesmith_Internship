(function()
{
    window.addEventListener("load", main);
}());




function main(){
    var year = queryString("year");
    var course = queryString("course");

    console.log(year);
    console.log(course);


    var questionsString = JSON.stringify(perguntas);
	var questionsParse = JSON.parse(questionsString)
    switch(year){
		
		
	}

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
    if(param_value)
        return param_value;
    else
        return 0;
}

function readTextFile(){

}

