Template.nav.rendered = function() {
	$(".button-collapse").sideNav();
};

Template.nav.events({
	'click .sign-out': function() {
		Meteor.logout();
		Router.go('/login');
	}
});
