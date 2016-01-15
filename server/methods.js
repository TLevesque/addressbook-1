Meteor.methods({
	'createContact': function(newContact) {
		var currentUserId = Meteor.userId(),
		activity = {
			action: "You added " + newContact.firstName + " to your contacts list",
			date: function() {
				return new Date.now();
			}
		};
		newContact.createdBy = currentUserId;
		Contacts.insert(newContact);
		Meteor.call('updateRecentActivities', activity);
	},
	'updateContact': function(currentContact) {
		var currentUserId = Meteor.userId();

		Contacts.update(currentContact.thisId, { 
			$set: { 
				firstName: 	currentContact.firstName,	
				lastName:  	currentContact.lastName,		
				email: 	 	currentContact.email, 				
				phone: 		currentContact.phone, 				
				address:  	currentContact.address, 			
				notes: 	 	currentContact.notes ,
				createdBy:  currentUserId				
			}
		});
	},
	'removeContact': function(currentContact) {
		var currentUserId = Meteor.userId();
		Contacts.remove({createdBy: currentUserId, _id: currentContact});

	},
	'updateRecentActivities': function(activity) {
		var currentUserId = Meteor.userId();
		activity.currentUserId = currentUserId;
		RecentActivities.insert(activity);
	}
});
