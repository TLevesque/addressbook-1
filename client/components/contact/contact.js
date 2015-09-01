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

		Contacts.update(this._id, { 
			$set: { 
				firstName: 			$('[name="firstName"]').val(),
				lastName: 			$('[name="lastName"]').val(),
				email: 				$('[name="email"]').val(),
				phone: 				$('[name="phone"]').val(),
				address: 			$('[name="address"]').val(),
				notes: 				$('[name="notes"]').val()
			}
		});
		
		tmpl.isEditing.set(false);
	},
	'click .delete':function(e, tmpl) {
		e.preventDefault();
		Contacts.remove({_id: this._id});
		
		setTimeout(function() {
			tmpl.isEditing.set(false);
			Router.go('/contacts');
		}, 250);
	}
});

Template.recentActivity.helpers({
	activities: function() {
		return RecentActivities.find();
	}
});

Template.contacts.helpers({
	contacts: function() {
		return Contacts.find();
	}
});