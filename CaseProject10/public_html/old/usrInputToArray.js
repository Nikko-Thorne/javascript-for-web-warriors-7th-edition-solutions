   function userInput() {
  
        var selected = new Array();
 
  
        var tblChecked = document.getElementById("tblChecked");
 
   
        var checkd = tblChecked.getElementsByTagName("INPUT");
 
    
        for (var i = 0; i < checkd.length; i++) {
            if (checkd[i].checked) {
                selected.push(checkd[i].value);
            } else {
                selected.pop(checkd[i].value);
            }
    }
 
   
        if (selected.value !== 0) {
            let selectedChoices = selected.toString();
            alert("Selected values: " + selected.join(","));
        }
    };
