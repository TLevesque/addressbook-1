Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
	this.render('nav', {to: 'nav'});
	this.render('recentActivity', {to: 'main'});
});

Router.route('/contacts', function() {
	this.render('nav', {to: 'nav'});
	this.render('contacts', {to: 'main'});
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
});

Router.route('/add-new', function() {
	this.layout('ApplicationLayout');
	this.render('nav', {to: 'nav'});
	this.render('add-new', {to: 'main'});
});

