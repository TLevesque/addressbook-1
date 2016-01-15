Template.recentActivity.helpers({
	// var currentUserId = Meteor.userId;
	activities: function() {
		return RecentActivities.find();
	}
});

