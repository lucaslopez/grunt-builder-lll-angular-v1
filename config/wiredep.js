module.exports =
{
	options:
	{
		overrides :
		{
			"bootstrap" :
			{
				"main" :
				[
					"dist/js/bootstrap.js",
					"dist/css/bootstrap.css",
					"less/bootstrap.less"
				]
			}
		}
	},
	builder__lll_angular_v1__dev_wiredep :
	{
		// Point to the files that should be updated when
		// you run `grunt wiredep`
		src :
		[
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/**/*.html' // .html support...
		],
		fileTypes :
		{
			html :
			{
				detect :
				{
					html : /<link.*href=['"]([^'"]+)/gi
				},
				replace :
				{
					js : '<script src="/vendor/{{filePath}}"></script>',
					css : '<link href="/vendor/{{filePath}}" rel="stylesheet">',
					html : '<link href="/vendor/{{filePath}}" rel="import">'
				}
			}
		},
		options :
		{
			// See wiredep's configuration documentation for the options
			// you may pass:

			// https://github.com/taptapship/wiredep#configuration

			ignorePath : '../../bower_components/'
		}
	},
	builder__lll_angular_v1__dist_wiredep :
	{
		// Point to the files that should be updated when
		// you run `grunt wiredep`
		src :
		[
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/**/*.html' // .html support...
		],
		fileTypes :
		{
			html :
			{
				detect :
				{
					html : /<link.*href=['"]([^'"]+)/gi
				},
				replace :
				{
					js : '<script src="/vendor/{{filePath}}"></script>',
					css : '<link href="/vendor/{{filePath}}" rel="stylesheet">',
					html : '<link href="/vendor/{{filePath}}" rel="import">'
				}
			}
		},
		options :
		{
			// See wiredep's configuration documentation for the options
			// you may pass:

			// https://github.com/taptapship/wiredep#configuration

			ignorePath : '../../bower_components/'
		}
	}
}
