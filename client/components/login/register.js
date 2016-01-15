Template.register.events({
	'submit form': function(e) {
		e.preventDefault();

		var email 		= e.target.registerEmail.value,
			password 	= e.target.registerPassword.value;

		Accounts.createUser({
			email: email,
			password: password
		});

		Router.go('/');
	}

});