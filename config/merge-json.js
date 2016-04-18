
module.exports = 
{
	builder__lll_angular_v1__dev_locale :
	{
		files :
		{
			"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/locales/<%= grunt.task.current.args[1] %>.json" :
			[
				"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/**/locales/*<%= grunt.task.current.args[1] %>.json"
			]
		}
	},
	builder__lll_angular_v1__dist_locale :
	{
		files :
		{
			"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/locales/<%= grunt.task.current.args[1] %><%= grunt.task.current.args[2] %>.json" :
			[
				"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/**/locales/*<%= grunt.task.current.args[1] %>.json"
			]
		}
	}
};
