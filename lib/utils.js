'use strict';

var utils = module.exports,
	basic;

utils.setBasic = function(b) {
    basic = b;
}

utils.authRequest = function (req, res, next) {
	basic.apply(req, res, function(){
		next();
	});
}