Meteor.startup(function() {

	if (Contacts.find().count() === 0) {

		var defaultContacts = [{

			_id: 'mom',
			firstName: 'Mom',
			lastName: null,
			phone: '555-555-5555',
			email: 'mommy@aoldialup1995.com',
			address: '1000 Old Lady Lane, Retirementsville, USA',
			notes: '<3 mom'
		}];

		_.each(defaultContacts, function(contact) {
			Contacts.insert(contact);
		});

	}

	if (RecentActivities.find().count() === 0) {
		var defaultActivity = [{
			action: 'You haven\'t done shit yet!'
		}];

		_.each(defaultActivity, function(activity) {
			RecentActivities.insert(activity);
		});
	}
});