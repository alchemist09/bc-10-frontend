// JavaScript Document
if(!com_codeWarrior) { var com_codeWarrior = {}; }
else if( com_codeWarrior && typeof(com_codeWarrior) != "object" ) {
	throw new Error("com_codeWarrior is not an Object type.");	
}

com_codeWarrior.EVENTS = {
	
	NAME: "Event Handling Module.",
	VERSION : 1.0,
	
	addEventHandler : function(oNode, sEvt, fFunc, bCaptures) {
		if( typeof(window.event) != "undefined" ) {
			oNode.attachEvent("on" + sEvt, fFunc);	
		} else {
			oNode.addEventListener(sEvt, fFunc, bCaptures)	
		}	
	},
	
	removeEventHandler : function(oNode, sEvt, fFunc, bCaptures) {
		if( typeof(window.event) != "undefined" ) {
			oNode.detachEvent("on" + sEvt, fFunc);	
		} else {
			oNode.removeEventListener(sEvt, fFunc, bCaptures);	
		}	
	},
	
	getEventTarget : function(evt) {
		if(window.event) {
			return window.event.srcElement;	
		} else {
			return evt.target;	
		}	
	},
	
	stopEvent : function(evt) {
		if(window.event) {
			window.event.cancelBubble = true;	
		} else {
			evt.stopPropagation();	
		}	
	},
	
	preventDefault : function(evt) {
		if(window.event) {
			window.event.returnValue = false;	
		} else {
			evt.preventDefault();	
		}	
	}
	
} // End of com_codeWarrior.EVENTS