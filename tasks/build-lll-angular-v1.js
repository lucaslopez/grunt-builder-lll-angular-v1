var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function (grunt)
{
	grunt.registerTask('build-lll-angular-v1', 'Build an angular application', function (mode, target, setup)
	{
		//var options = this.options();
		var options = grunt.config('builder');
		
		if (mode === undefined)	mode = "dist";
		if (target === undefined || target == null)
		{
			grunt.fail.warn("Build target not defined");
			return;
		}
		
		var build = function(s)
		{
			if (mode == "dev")
			{
				// Clean the target directory in tmp folder
				grunt.task.run('clean:builder__tmp_target:' + target);
				// Copy angular source files to tmp folder
				grunt.task.run('copy:builder__lll_angular_v1__dev_src:' + target);
				// Merge sparse i18n json files to a single file per language
				for (locale in s.locales)
				{
					var o = s.locales[locale];
					if (o.build)
						grunt.task.run('merge-json:builder__lll_angular_v1__dev_locale:' + target + ':' + locale);
				}
				// Copy all the angular partials to /partials
				grunt.task.run('copy:builder__lll_angular_v1__dev_partials:' + target);
				// Inject bower dependencies via wiredep
				grunt.task.run('wiredep:builder__lll_angular_v1__dev_wiredep:' + target);
				/*
				// Compile LESS files
				grunt.task.run('less:dev:' + target);
				*/
				// Compile SASS files
				grunt.task.run('sass:builder__lll_angular_v1__dev_sass:' + target);
				// Inject all css and js files to the application index
				grunt.task.run('injector:builder__lll_angular_v1__dev_injector:' + target);
				// Emit event to notify the prebuilding has finished
				grunt.event.emit('prebuild_finished', target);
			}
			else if (mode == "dist")
			{
				// Clean the target directory in tmp folder
				grunt.task.run('clean:builder__tmp_target:' + target);
				// Copy express source files to tmp folder
				grunt.task.run('copy:builder__lll_angular_v1__dist_src:' + target);
				// Merge sparse i18n json files to a single file per language
				for (locale in s.locales)
				{
					var o = s.locales[locale];
					if (o.build)
					{
						var taskName = 'merge-json:builder__lll_angular_v1__dist_locale:' + target + ':' + locale;
						if (o.cache)
						{
							taskName += ':.cache';
						}
						//console.log(taskName);
						grunt.task.run(taskName);
					}
				}
				// Embed locales files in app.js
				grunt.task.run('jsonAngularTranslate:builder__lll_angular_v1__dist_locales:' + target + ":" + s.mainModule);
				// Copy all the angular partials to /partials
				grunt.task.run('copy:builder__lll_angular_v1__dist_partials:' + target);
				// Apply special properties to partials (cache or not, etc)
				for (partial in s.partials)
				{
					var o = s.partials[partial];
					// Precache partial into js?
					if (o.cache)
						grunt.task.run('rename:builder__lll_angular_v1__dist_partial_cache:' + target + ":" + partial);
				}
				// Pack and merge specified angular partials (partials/*.cache.html) into a single js file
				grunt.task.run('ngtemplates:builder__lll_angular_v1__dist_partials:' + target + ":" + s.mainModule);
				// Compile SASS files to single app.min.css
				grunt.task.run('sass:builder__lll_angular_v1__dist_sass:' + target);
				// Pack and minify all js files within modules to single app.min.js
				grunt.task.run('uglify:builder__lll_angular_v1__dist_uglify:' + target);
				// Inject bower dependencies via wiredep to index.html
				grunt.task.run('wiredep:builder__lll_angular_v1__dist_wiredep:' + target);
				// Inject app css and js files to index.html
				grunt.task.run('injector:builder__lll_angular_v1__dist_injector:' + target);
				// Minify html output
				grunt.task.run('htmlmin:builder__lll_angular_v1__dist_htmlmin:' + target);
				// Clean everything we dont need
				grunt.task.run('clean:builder__lll_angular_v1__dist_after:' + target);
				// Emit event to notify the prebuilding has finished
				grunt.event.emit('prebuild_finished', target);
			}
		};
		
		var targetDir = path.join(process.cwd(), options.paths.source, target);
		if (grunt.file.isDir(targetDir))
		{
			var buildfile = path.join(targetDir, 'buildfile.json');
			if (grunt.file.isFile(buildfile))
			{
				var targetConfig = grunt.file.readJSON(buildfile);
				if (targetConfig)
				{
					if (targetConfig.type && targetConfig.type == 'lll-angular-v1')
					{
						if (setup === undefined && targetConfig.defaultSetup)
						{
							setup = targetConfig.defaultSetup;
						}
						
						if (setup)
						{
							if (targetConfig.setups && targetConfig.setups[setup])
							{
								var setupConfig = _.merge(targetConfig.setups['_common'], targetConfig.setups[setup]);
								if (setupConfig.mainModule === undefined) setupConfig.mainModule = target;
								//grunt.task.run("log:builder__h2:" + "Building target '" + target + "' in mode '" + mode);
								build(setupConfig);
							}
							else
							{
								grunt.fail.warn("Target '" + target + "' has no setup '" + setup + "' defined in buildfile.js");
							}
						}
						else
						{
							grunt.fail.warn("No setup was defined and no default setup in target '" + target + "'");
						}
					}
					else
					{
						grunt.fail.warn("Target '" + target + "' is not from builder type lll-express-v4");
					}
				}
			}
			else
			{
				grunt.fail.warn("Target '" + target + "' has no buildfile.js");
			}
		}
		else
		{
			grunt.fail.warn("Could not find target '" + target + "' in directory " + targetDir);
		}
		
		//console.log(builderOptions);
	});
};
