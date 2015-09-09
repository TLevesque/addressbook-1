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
		var currentUserId = Meteor.userId();

	},

	'click .done': function(e, tmpl) {
		e.preventDefault();
		var currentUserId = Meteor.userId();

		Contacts.update(this._id, { 
			$set: { 
				firstName: 			$('[name="firstName"]').val(),
				lastName: 			$('[name="lastName"]').val(),
				email: 				$('[name="email"]').val(),
				phone: 				$('[name="phone"]').val(),
				address: 			$('[name="address"]').val(),
				notes: 				$('[name="notes"]').val(),
				createdBy: 			currentUserId
			}
		});
		
		tmpl.isEditing.set(false);
	},

	'click .delete':function(e, tmpl) {
		e.preventDefault();
		var currentUserId = Meteor.userId();

		Contacts.remove({createdBy: currentUserId, _id: this._id});
		
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
		// return Contacts.find({
		// 	sort: {firstName: -1}
		// });
	}
});