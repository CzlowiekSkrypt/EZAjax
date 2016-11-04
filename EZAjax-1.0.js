/*
* EZAjax
* Version 1.0
* Author WW
*/

/*
*@Params
*url: url to requested file
*data: associative array {'key':'value', ...}
*/

function ajax(url, data){
	var httpc = new XMLHttpRequest();
	var dataString = "";
	var dataLength = Object.keys(data).length
	var key;
	for (key in data){
	    let value = data[key];
	    dataString += "&"+key+"="+value;
	}
	var requestUrl = url+"?"+dataString;
	httpc.open("GET", requestUrl, true);
	httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	document.getElementById("ajaxResponse").innerHTML = "<h2>Sending...</h2>";
	httpc.onreadystatechange = function() { 
        if(httpc.readyState == 4 && httpc.status == 200) {
              document.getElementById("ajaxResponse").innerHTML = "<h2>"+httpc.responseText+"</h2>";
                } 
         }
    httpc.send();  
}


/**
* Example
*
*var array = {'one':1, 'person':'Kevin', 'car':'toyota'};
*var url = "yourFile.php";
*ajax(url, array);
*
* HTML
*
*This line returns response from requested action
*<div id="ajaxResponse"></div>
*
*/