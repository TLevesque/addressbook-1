RecentActivities = new Mongo.Collection('recent-activities');

RecentActivities.allow({
	insert: function(userID, doc) {
		return true;
	},
	update: function(userID, doc, fields, modifier) {
		return true;
	},
	remove: function(userID, doc) {
		return true;
	}
});

