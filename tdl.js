//catch todo and add it to list
$(document).ready(function(){
    $("input[type='text']").on("keypress",function(event){
        if(event.which==13){
            //TEXT GRAB TO ADD TODO
            $("ul").append("<li> <span>X </span>" + $(this).val()+ "<li>");
            //delete text after adding todo
            $(this).val(""); 
           }
        });
        
    $('ul').on('click','li',function(){
        $(this).toggleClass("done");
        });
    
    $("ul").on('click','span',function(){
        $(this).parent().remove();
    });

var plus= document.querySelector("#plus");

    plus.addEventListener("click",function(){
        document.querySelector('#addToDo').classList.toggle('fade')
    });
    
    })

//Task Done
