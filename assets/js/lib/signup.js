$(function() {
	$('#signup .input.submit').click(function() {
		var $message = $('#signup .message');

		if( $('#location-1').is(':checked') || $('#location-2').is(':checked') ) { 
			var email = $('#signup .input.email').text();

			var mailchimpAccount = '99152c6106cf28d6dc089bcf6';
			var mailchimpListID = ($('#location-1').is(':checked'))
			? 'afc8d95634'
			: '232e0669d2';
			

			var url = '//musiccentrelondon.us15.list-manage.com/subscribe/post-json?u=' + mailchimpAccount + '&amp;id=' + mailchimpListID + '&c=?';
			
			$.ajax({
				type: 'GET',
				url: url,
				data: 'EMAIL='+email,
				dataType: 'jsonp',
				error: function(err) {
					// console.log('ERROR');
					//console.log(err);
					$message.addClass('error').text('Something went wrong. Please try again later.');
				},
				success: function(data) {
					// console.log('SUCCESS');
					//console.log(data);
					if (data.result === 'success') {
						$message.addClass('success').text('Awesome. Please check your inbox to verify your email.') 
					}
					else {
						$message.addClass('error').text('Please enter a valid email address.');
					}
				}
			})
		}
		else {
			$message.addClass('error').text('Please choose a music centre location.');
		}
	});

	$("#signup .input.email").keyup(function(event){
		if(event.keyCode == 13){
			$("#signup .input.submit").click();
		}
	});
});
