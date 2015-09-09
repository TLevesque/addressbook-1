Meteor.publish('theContacts', function() {
	var currentUserId = this.userId;
	return Contacts.find({
		createdBy: currentUserId
	},{
		sort: {firstName: -1}
	});
	return Contacts.find();
});
