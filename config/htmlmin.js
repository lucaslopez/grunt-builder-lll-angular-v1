module.exports =
{
	builder__lll_angular_v1__dist_htmlmin :
	{
		options :
		{
			removeComments : true,
			collapseWhitespace : true,
			collapseBooleanAttributes : true
		},
		files :
		{
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/index.html' : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/index.html', 
		}
	},
	
};
