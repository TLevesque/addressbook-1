Template.contact.created = function() {
	this.isEditing = new ReactiveVar(false);
}

Template.contact.helpers({
	isEditing: function() {
		return Template.instance().isEditing.get();
	}
});

Template.contact.events({
	'click .edit':function(e, tmpl) {
		e.preventDefault();
		tmpl.isEditing.set(true);
	},

	'click .done': function(e, tmpl) {
		e.preventDefault();
		console.log('done clicked');
		var currentContact = {
			thisId: 			this._id,
			firstName: 			$('[name="firstName"]').val(),
			lastName: 			$('[name="lastName"]').val(),
			email: 				$('[name="email"]').val(),
			phone: 				$('[name="phone"]').val(),
			address: 			$('[name="address"]').val(),
			notes: 				$('[name="notes"]').val()
		};
		Meteor.call('updateContact', currentContact);
		tmpl.isEditing.set(false);
	},

	'click .delete':function(e, tmpl) {
		e.preventDefault();

		console.log('delete clicked');

		Meteor.call('removeContact', this._id);
		
		setTimeout(function() {
			tmpl.isEditing.set(false);
			Router.go('/contacts');
		}, 250);
	}
});

Template.recentActivity.helpers({
	activities: function() {
		var currentUserId = Meteor.userId();

		return RecentActivities.find();
	}
});

Template.contacts.helpers({
	contacts: function() {
		return Contacts.find({},
			{sort: {firstName: -1}});
	}
});

Template.contactShort.created = function() {
	this.hasContacts = new ReactiveVar(false);
	if (Contacts.count > 0) {
		hasContacts = true;
	} 
}