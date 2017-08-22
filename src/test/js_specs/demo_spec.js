//demo_spec.js //scm test

describe('Demo Browser Test', function() {
	it('should have a valid title', function() {
		
		browser.get('http://10.101.10.44:8888/AngularJavaApp/')
		
		expect(browser.getTitle()).toEqual('AngularJavaApp');
	});
});
