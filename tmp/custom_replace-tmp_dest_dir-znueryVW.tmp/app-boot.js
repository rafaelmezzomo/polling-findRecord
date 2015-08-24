/* jshint ignore:start */

define('post-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'post-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("post-ember/tests/test-helper");
} else {
  require("post-ember/app")["default"].create({"LOG_TRANSITIONS":true,"name":"post-ember","version":"0.0.0+41da8361"});
}

/* jshint ignore:end */
