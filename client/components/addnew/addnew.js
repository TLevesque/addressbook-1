Template.addNew.events({
	'submit form': function(e) {
		e.preventDefault();

		var t 			= event.target,
			newContact 	= {
				_id:  		t.firstName.value.toLowerCase() + '_' + t.lastName.value.toLowerCase(),
				firstName: 	t.firstName.value,
				lastName: 	t.lastName.value,
				email: 		t.email.value,
				phone: 		t.phone.value,
				address: 	t.address.value,
				notes: 		t.notes.value
			};

		Meteor.call('createContact', newContact);

		t.firstName.value 	= '';
		t.lastName.value 	= '';
		t.email.value 		= '';
		t.phone.value 		= '';
		t.address.value		= '';
		t.notes.value 		= '';

		setTimeout(function() {
			Router.go('/contacts');
		}, 250);
	}
});


