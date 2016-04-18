module.exports =
{
	options : {},
	dev:
	{
		options:
		{
			compress: false,
			yuicompress: false,
			optimization: 2
		},
		files:
		{
			"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.less.css": "<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/**/*.less" // destination file and source file
		}
	}
}
