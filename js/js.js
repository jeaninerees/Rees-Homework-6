/*
	Hi Jeanine!  I really like how you started working with the Javascript for the form
	here.  I have a couple of comments for you inline below.
*/

$(document).ready(function() {

//When the user submits the form, make sure that the First Name field is filled out.

//1. User types name.
//2. User submits the form.
$("form").submit(validateForm);

function validateForm() {
	event.preventDefault();
	alert("THANKS FOR SIGNING UP! WE LOVE YOUUU!");

	//Set the values
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var areaCode = $("#phoneAC").val();
	var phonePrefix = $("#phonePre").val();
	var phoneLine = $("#phoneLN").val();
	var streetAddress = $(".address-street-address").val();
	var addressTwo = $(".address-line-2").val();
	var city = $(".address-city").val();
	var state = $(".address-state").val();
	var zip = $(".address-postal-code").val();
	var email = $(".email").val();

	/*
		I really like how you are getting all of the values of your form fields and storing
		them in variables.  Now think about what you can do with all of that information.
		
		Did the user fill in all of the required fields?
		Is the state only 2 letters?
		Is the postal code actually a number?
	*/
	}

//When the user hits the reset button, the form clears.
$("#reset").click(clearForm);

function clearForm() {
	event.preventDefault();
	/*
		This is a good attempt, but in order to clear out the value of a form field, your
		selector needs to be the field itself, not the container.  What selector can you use that
		could be used for the actual field your user is entering information into? 
	*/
	$("#form-row").val("");
	$("#contactMethod").val("blank");
	}






});
