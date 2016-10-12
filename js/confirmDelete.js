// JavaScript Document
function clickHandler(e) {
	var confirmDelete = confirm("Are you sure you want to delete this article?");
	if(!confirmDelete) {
		com_codeWarrior.EVENTS.preventDefault(e);	
	}	
}

function deleteProvider(e) {
	var confirmDelete = confirm("Are you sure you want to delete this provider?");
	if(!confirmDelete) {
		com_codeWarrior.EVENTS.preventDefault(e);	
	}	
}

function deleteMenu(e) {
	var confirmDelete = confirm("Are you sure you want to delete this menu item?");
	if(!confirmDelete) {
		com_codeWarrior.EVENTS.preventDefault(e);	
	}	
}

function deleteContent(e) {
	var confirmDelete = confirm("Are you sure you want to delete the content of this page?");
	if(!confirmDelete) {
		com_codeWarrior.EVENTS.preventDefault(e);	
	}	
}

function confirmDelete(e) {
	var aDelLinks = document.getElementsByTagName("a");
	// Loop Through Links Checking For Their Class Name Attributes
	for(var i=0; i < aDelLinks.length; i++) {
		if(aDelLinks[i].className.indexOf("delete-link") == 0) {
			aDelLinks[i].onclick = clickHandler;	
		} else if(aDelLinks[i].className.indexOf("del-doc") == 0) {
			aDelLinks[i].onclick = deleteProvider;	
		} else if(aDelLinks[i].className.indexOf("del-menu") == 0) {
			aDelLinks[i].onclick = deleteMenu;	
		} else if(aDelLinks[i].className.indexOf("del-cont") == 0) {
			aDelLinks[i].onclick = deleteContent;
		}
	}	
}

// FUNCTION TO TOGGLE FILE UPLOAD FIELD
function hideFormField() {
	var oFormField = document.getElementById("file-field");
	    oFormField.className = "hide";
}

function toggleField() {
	var oBtnToggle = document.getElementById("btnToggleField");
	oBtnToggle.onclick = changeVisibility;	
}

function changeVisibility(e) {
	var oFormField = document.getElementById("file-field");
	var oBtnToggle = com_codeWarrior.EVENTS.getEventTarget(e);
	if(oFormField.className == "hide") {
		oFormField.className = "show";
		// Change Value On Button		
		oBtnToggle.value = "Cancel Adding Image";	
	} else if(oFormField.className == "show") {
		oFormField.className = "hide";	
		oBtnToggle.value = "Add Image";
		// Get The File Input File, Then Unset The Chosen Value
		var aFormFields = document.getElementsByTagName("input");
		for(var i=0; i < aFormFields.length; i++) {
			if(aFormFields[i].getAttribute("type") == "file") {
				aFormFields[i].value = null;	
			}	
		}
	}
}

com_codeWarrior.EVENTS.addEventHandler(window, "load", confirmDelete, false);
com_codeWarrior.EVENTS.addEventHandler(window, "load", hideFormField, false);
com_codeWarrior.EVENTS.addEventHandler(window, "load", toggleField, false);