module.exports =
{
	builder__lll_angular_v1__dist_partial_cache :
	{
		files : 
		[
			{
				src : ['<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials/<%= grunt.task.current.args[1] %>.html'],
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials/<%= grunt.task.current.args[1] %>.cache.html'
			},
		]
	}
};
