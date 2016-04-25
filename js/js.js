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
	}

//When the user hits the reset button, the form clears.
$("#reset").click(clearForm);

function clearForm() {
	event.preventDefault();
	$("#form-row").val("");
	$("#contactMethod").val("blank");
	}






});
