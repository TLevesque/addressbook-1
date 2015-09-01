Contacts = new Mongo.Collection('contacts');

Contacts.allow({
	insert: function(userID, doc) {
		return true;
	},
	update: function(userID, doc, fields, modifier) {
		return true;
	},
	remove: function(userID, doc) {
		return true;
	},
	fetch: ['owner']
});

