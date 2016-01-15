// ============================================================================
// Layout Configuration
Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

// ============================================================================
// Login
Router.route('/login', function() {
	this.layout('LoginLayout');
	// this.render('nav', {to: 'nav'});
	this.render('login', {to: 'main'});
});
var notLoggedInUser = function() {
	if (!(Meteor.user() || Meteor.loggingIn())) {
		Router.go('/login');
	} else {
		this.next();	
	}
};
var loggedInUser = function() {
	if (Meteor.user() ) {
		Router.go('/');
		// this.next();
	} else {
		this.next();
	}
};
Router.onBeforeAction(notLoggedInUser, {except: ['login', 'register']});
Router.onBeforeAction(loggedInUser, {only: ['/', 'login']});

// ============================================================================
// Register
Router.route('/register', function() {
	this.layout('LoginLayout');
	this.render('register', {to: 'main'});
});
// ============================================================================
// Dashboard
Router.route('/', function() {
	this.render('nav', {to: 'nav'});
	this.render('dashboard', {to: 'main'});
});

// ============================================================================
// Contacts Listing
Router.route('/contacts', function() {
	this.render('nav', {to: 'nav'});
	this.render('contacts', {to: 'main'});
});

// ============================================================================
// Contact Individual
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
});

// ============================================================================
// Contact Edit
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
});

// ============================================================================
// Add New Contact
Router.route('/add-new', function() {
	this.layout('ApplicationLayout');
	this.render('nav', {to: 'nav'});
	this.render('add-new', {to: 'main'});
});
