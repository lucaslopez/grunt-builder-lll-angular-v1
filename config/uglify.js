module.exports =
{
	builder__lll_angular_v1__dist_uglify:
	{
		files :
		{
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.min.js' : 
			[
				'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/**/*.js'
			]
		}
	}
};
