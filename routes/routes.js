Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
	this.render('nav', {to: 'nav'});
	this.render('recentActivity', {to: 'main'});
	$('.button-collapse').sideNav('hide');
});

Router.route('/contacts', function() {
	this.render('nav', {to: 'nav'});
	this.render('contacts', {to: 'main'});
	$('.button-collapse').sideNav('hide');
});

Router.route('/contact/:_id', function() {
	this.layout('ApplicationLayout', function() {
		return Contacts.findOne({_id: this.params._id});
	});
	this.render('nav', {to: 'nav'});
	this.render('contact', {
		to: 'main',
		template: 'contact',
		data: function() {
			return Contacts.findOne({_id: this.params._id});
		}
	});	
	$('.button-collapse').sideNav('hide');
});

Router.route('/contact/:_id/edit', function() {
	this.layout('ApplicationLayout', function() {
		return Contacts.findOne({_id: this.params._id});
	});
	this.render('nav', {to: 'nav'});
	this.render('contact', {
		to: 'main',
		template: 'editContact',
		data: function() {
			return Contacts.findOne({_id: this.params._id});
		}
	});
	$('.button-collapse').sideNav('hide');
});

Router.route('/add-new', function() {
	this.layout('ApplicationLayout');
	this.render('nav', {to: 'nav'});
	this.render('add-new', {to: 'main'});
	$('.button-collapse').sideNav('hide');
});

Router.route('/login', function() {
	this.layout('LoginLayout');
	this.render('nav', {to: 'nav'});
	this.render('login', {to: 'main'});
	$('.button-collapse').sideNav('hide');
});

var notLoggedInUser = function() {
	if (!(Meteor.user() || Meteor.loggingIn())) {
		console.log('not logged in or logging in');
		Router.go('/login');
	} else {
		console.log('else');
		this.next();	
	}
};

var loggedInUser = function() {
	if (Meteor.user() ) {
		Router.go('/contacts');
		this.next();
	} else {
		this.next();
	}
};

Router.onBeforeAction(notLoggedInUser, {except: ['login']});
Router.onBeforeAction(loggedInUser, {only: ['/', 'login']});
