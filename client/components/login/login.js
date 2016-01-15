Template.login.events({
	'submit form': function(e) {
		e.preventDefault();

		var email = e.target.loginEmail.value,
			password = e.target.loginPassword.value;

		Meteor.loginWithPassword(email, password);

	}
});