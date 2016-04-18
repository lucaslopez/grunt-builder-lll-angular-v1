module.exports =
{
	options : {},
	builder__lll_angular_v1__dev_injector :
	{
		files :
		{
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/index.html' :
			[
				'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/**/*.js',
				'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/**/*.css'
			]
		},
		options:
		{
			ignorePath: '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/'
			//destFile: '/dcdcdcdcd'
		}
	},
	builder__lll_angular_v1__dist_injector :
	{
		files :
		{
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/index.html' :
			[
				'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.min.js',
				'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.min.css'
			]
		},
		options:
		{
			ignorePath: '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/',
			min: true
			//destFile: '/dcdcdcdcd'
		}
	}
}
