// JavaScript File
/* global $ */
$( document ).ready(function() {
        console.log( "document loaded" );
    });
 
    $( window ).on( "load", function() {
        console.log( "window loaded" );
        
        var sb = document.getElementById("lookup");
        var results = document.getElementById("result");
        var all = document.getElementsByName("all")[0];
        var httpRequest = new XMLHttpRequest();
        
        
        sb.onclick = function(){
        var url = "https://info2180-lab7-devnub.c9users.io/world.php?"
        
        httpRequest.onreadystatechange = sbClick;
        if(all.checked == true){
            var q = "all=true";
            url += q;
        }
        else{
            var q = "country=";
            url += q;
            url += document.getElementById("country").value;
        }
        
        httpRequest.open('GET', url);
        httpRequest.send();
        return false;
    }
    
    function sbClick(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                var resp = response;
                resp = resp.replace("<li>","");
                resp = resp.replace("</li>","");
                resp = resp.replace("<ul>","");
                resp = resp.replace("</ul>","");
                if(all.checked == false){
                    alert(resp);
                }
                results.innerHTML = response;
            }
            else{
                alert('Problem with your request');
            }
        }
    }

        
    });