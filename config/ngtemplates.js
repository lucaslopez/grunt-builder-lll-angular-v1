module.exports =
{
	builder__lll_angular_v1__dist_partials :
	{
		src : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials/*.cache.html',
		dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules/~tmp/partials/partials.js',
		options :
		{
			module : '<%= grunt.task.current.args[1] %>',
			url : function (url)
			{
				var i = url.indexOf('partials/');
				return url.substring(i, url.length).replace(".cache", "");
			},
			htmlmin :
			{
				removeComments : true,
				collapseWhitespace : true,
				collapseBooleanAttributes : true
			}
		}
	}
};
