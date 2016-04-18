module.exports =
{
	// To embed all locales in one js (only the ones with .cache.js extension)
	builder__lll_angular_v1__dist_locales :
	{
		options :
		{
			moduleName : '<%= grunt.task.current.args[1] %>',
			createNestedKeys: false,
			//extractLanguage : /..(?=\.[^.]*$)/,
			/**/
			extractLanguage : function(value)
			{
				// gets en_US from /locales/translation.en_US.json
				// or from /locales/en_US.json or from en_US.json
				// slower than using array indexes, but not critical here and easier to read
				// todo: make it a regex
				//var locale = value.split('/').slice(-1)[0].split('.').slice(-2)[0];
				var locale = value.split('/').slice(-1)[0].split('.')[0];
				//console.log("Processing locale: " + locale);
				return locale;
			},
			/**/
			hasPreferredLanguage : true
		},
		files : 
		[
			{
				expand : true,
				cwd : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/locales/',
				src : '*.cache.json',
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/~tmp/locales',
				ext : '.js'
			}
		]
	},
	// To embed only one locale, passed in as a parameter (not the one used)
	builder__lll_angular_v1__dist_locale :
	{
		options :
		{
			moduleName : '<%= grunt.task.current.args[0] %>',
			createNestedKeys: false,
			//extractLanguage : /..(?=\.[^.]*$)/,
			/**/
			extractLanguage : function(value)
			{
				// gets en_US from /locales/translation.en_US.json
				// or from /locales/en_US.json or from en_US.json
				// slower than using array indexes, but not critical here and easier to read
				// todo: make it a regex
				var locale = value.split('/').slice(-1)[0].split('.').slice(-2)[0];
				//console.log("Processing locale: " + locale);
				return locale;
			},
			/**/
			hasPreferredLanguage : true
		},
		files : 
		[
			{
				expand : true,
				cwd : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/locales/',
				src : '<%= grunt.task.current.args[1] %>.json',
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/~tmp/locales',
				ext : '.js'
			}
		]
	}
};
