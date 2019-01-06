function femiTrigger(){
	var triggerText = document.getElementById("trigger-text");
	
	triggerText.innerHTML = "STOP TRIGGERING ME!";
}

function femiUntrigger(){
	var triggerText = document.getElementById("trigger-text");
	
	triggerText.innerHTML = "";
}

$(document).ready(function(){
	$("#myCarousel").carousel({interval: 4500});
});

var prefix = ["CIS-GENDERED", "PANSEXUAL", "HETERONORMATIVE", "GENDER BINARY", "MISOGYNISTIC", "PATRIARCHAL", "CREEPY", "LITERAL", "WHITE", "BINARY", "MICROAGRESSIVE", "CIS-HET", "CIS", "TRANSMISOGYNISTIC", "INTERSECTIONAL", "HOMOPHOBIC", "TRANSPHOBIC", "PEDOPHOBIC", "ZOOPHOBIC", "PROBLEMATIC", "INAPPROPRIATE", "PRIVILEGED", "TOXIC", "MASCULINE", "HARMFUL", "NARROW MINDED", "SEXIST", "BIGOTED", "MANSPLAINING", "MANSPREADING", "ANTISEMITIC", "PRIVILEGED", "THIN", "INSENSITIVE", "PRIMITIVE", "ABLEIST", "VIOLENT", "CONSERVATIVE", "SLUT-SHAMING", "FAT-SHAMING", "SHAMING", "APPROPRIATING", "DERAILING", "WHITESPLAINING", "ETHNOCENTRIC", "STRAIGHTSPLAINING", "THINSPLAINING", "XENOPHOBIC"];
var suffix = ["WHITE MALE", "CIS MALE", "MALE", "BIGOT", "RACIST", "MANSPREADER", "NAZI", "HITLER", "NEANDERTHAL", "APEMAN", "SUBHUMAN", "OPPRESSOR", "SUPREMACIST", "NECKBEARD", "ISLAMOPHOBE", "SHITLORD", ];

function generateInsult(){
	
	var chosenPrefix = prefix[Math.floor(Math.random() * prefix.length)];
	
	var chosenSuffix = suffix[Math.floor(Math.random() * suffix.length)];
	
	document.getElementById("prefix").innerHTML = chosenPrefix;
	document.getElementById("suffix").innerHTML = chosenSuffix;
	
}

window.onload = generateInsult;