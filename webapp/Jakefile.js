(function() {
  "use strict";

  var exec = require('child_process').exec;
  var connect = require('connect');

  desc("Linting all source files");
  task("lint", function() {
    exec('jsl -process src/*js', function (error, stdout, stderr) {
      // output is in stdout
      console.log(stdout);
    });
  });

  desc("Tidying up all HTML source files");
  task("tidy", function() {
    exec('/usr/local/bin/tidy -e -q index.html html/*.html', function(error, stdout, stderr) {
      console.log("HTML tidy...");
      if (error == null) {
        console.log("ok");
      }
      console.log(stdout);
      console.log(stderr);
    });
   });

  desc("run the application (for manual testing)");
  task("server", function() {
    var port = 8080;
    console.log("Server listening on port " + port); 
    var serveStatic = require('serve-static');
    connect().use(serveStatic(__dirname)).listen(port);
  });

  desc("Default build");
  task("default", ['lint', 'tidy'], function() {
  });

})();
