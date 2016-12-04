$('.message a').click(function () {
	$('form').animate({
		height : "toggle",
		opacity : "toggle"
	}, "slow");
});

///////////////////////////////////////////////////////////////

$('.signup').click(function () {
	console.log($(".name").val());
	console.log($(".password").val());
	console.log($(".email").val());
	console.log($(".location").val());
	
	var data = { 
		name : $(".name").val(),
		password : $(".password").val(),
		email : $(".email").val(),
		location : $(".location").val()
	};
	console.log(data);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', "https://nfn80qiiqk.execute-api.us-east-1.amazonaws.com/prod", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
		}
	};
	xhr.send(JSON.stringify(data));
});

///////////////////////////////////////////////////////////////

$('.sign-in').click(function(){
	var data = {
		email2 : $(".email-2").val(),
		password2 : $(".password-2").val(),
	};

	console.log(data);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', "https://nfn80qiiqk.execute-api.us-east-1.amazonaws.com/prod", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
		}
	};
	xhr.send(JSON.stringify(data));

});




