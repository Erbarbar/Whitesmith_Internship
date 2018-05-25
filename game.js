(function()
{
    window.addEventListener("load", main);
}());

var year,course,questions,usedQuestions = [];
var atualQuestion,colunas = [];



function main(){
	getDataURL();
	document.getElementById("liveplayer").innerHTML = 3
	console.log("Questoes = " + questions.length);
	var option = Math.round(Math.random()*questions.length)
	showQuestions(0);
} // main

function showQuestions(option){
	atualQuestion = option;
	usedQuestions[option] = true;
    var teste = questions[option];
	console.log("Option = " + option)
	console.log("Questions = " + questions)
	console.log("teste = " + teste);
	document.getElementById("question1").innerHTML = teste['question_text'];
	var list = [];
	list[0] = teste['correct_answer'];
	var i;
	for(i=1;i<4;i++){
		list[i] = teste['wrong_answer'+i];
	}
	list = shuffleArray(list);
	var a=0;
	var table = document.getElementById("tabela");
	if (table)
		table.innerHTML = ""
	var tbody = document.createElement("tbody");
	var linha;
	var coluna;
	var texto;
	var links = []
	for(var j = 0; j < 2; j++) {
           linha=document.createElement("tr");
           for(var i = 0; i < 2; i++) {
               coluna = document.createElement("td");
			   link = document.createElement("link"+a)
			   link.id = a;
			   
               if (i == 0)
                 	texto = document.createTextNode(list[a++]);
               else
					texto = document.createTextNode(list[a++]);
				link.appendChild(texto);
               	coluna.appendChild(link);
				colunas[a-1] = coluna;
				links[a-1] = link;
              	linha.appendChild(coluna);
               // set the cell background color
               // if the column is 0. If the column is 1 hide the cel
               
           }
           tbody.appendChild(linha);
    }
	var evt = function(ev){
		var option;
		console.log("id = " + ev.target.id);
		console.log("teste = " + ev.target.innerHTML);
		console.log("resposta correta = " + questions[atualQuestion]['correct_answer'])
        if(ev.target.innerHTML == questions[atualQuestion]['correct_answer']){
			if(verifyAllQuestions()){
				option =  Math.round(Math.random() * questions.length) - 1;
				do{
					option+=1
					if(option%questions.length==0)
						option = 0;
					console.log("option = " + option);

				}while(usedQuestions[option] == true);
				colunas[ev.target.id].style.background = "#00ff00 ";
				setTimeout(function(){ showQuestions(option);},10000);
				
			}else{
				console.log("Não há mais perguntas");
				
			}
		}else{
			lives = document.getElementById("liveplayer").textContent
			document.getElementById("liveplayer").innerHTML = lives -1;
			colunas[ev.target.id].style.background = "#ff0000 ";

		}
			
    }
	for(a = 0;a<4;a++){
			links[a].addEventListener("click",evt);
		
	}
    tabela.appendChild(tbody);
	
	
}
function verifyAllQuestions(){
	for(var i=0;i<usedQuestions.length;i++){
		if(usedQuestions[i]==false)
			return true;
	}
	return false;
}
function getDataURL(){
	year = queryString("year");
    course = queryString("course");
    var questionsString = JSON.stringify(perguntas);
	var questionsParse = JSON.parse(questionsString);
	questions = questionsParse['year_' + year][course];
	for(var i=0;i<questions.length;i++){
		usedQuestions[i] = false;
		
	}
	
	
}
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

function shuffleArray(array){
	var i;
	var aux = [false,false,false,false];
	var option;
	var output = [0,0,0,0];
	for(i=array.length-1;i>=0;i--){
		option =  Math.round(Math.random() * i);

		do{
			option+=1
			if(option%4==0)
				option = 0;

		}while(aux[option] == true);
		output[option] = array[i];
		aux[option] = true;		
	}
	return output;

}

