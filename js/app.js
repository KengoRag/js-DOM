/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/
document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/
document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").style.backgroundColor = "red";
/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
document.getElementsByClassName("profile")[0].innerHTML = "All the other kids with the pumped up kicks. ";

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
document.getElementsByClassName("profile")[1].innerHTML = "Yes we can.";

/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
document.getElementsByClassName("alias")[2].innerHTML = "Darth Vader";


/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
 var peter = document.createElement("div");
 peter.id = "name7";
 peter.innerHTML = "Peter Griffin";
 document.getElementById("nameParent").appendChild(peter);
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var tim = document.createElement("div");
tim.id = "alias8";
tim.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(tim);

//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/
var man = document.getElementsByClassName("block3 col-sm-4");
var go = document.createElement("P");
go.innerHTML = "Guy Fawkes" 
man[2].appendChild(go);
man[2].childNodes[0].src="https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000018002551.jpg?w=600&strip=all";

var own0 = document.getElementsByClassName("block3 col-sm-4");
var des0 = document.createElement("P");
des0.innerHTML = "V for Vendetta";
own0[2].appendChild(des0);

var own1 = document.getElementsByClassName("block3 col-sm-4");
var des1 = document.createElement("P");
des1.innerHTML = "Richard Dawkins";
own1[2].appendChild(des1);

var own2 = document.getElementsByClassName("block3 col-sm-4");
var des2 = document.createElement("P");
des2.innerHTML = "&#34; Remember remember the 5th of November &#34; "
own2[2].appendChild(des2);


