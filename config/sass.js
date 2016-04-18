module.exports =
{
	options: 
	{
		require:
		[
			'sass-globbing'
		]
	},
	builder__lll_angular_v1__dev_sass:
	{
		options:
		{
			style: 'expanded'
		},
		files:
		{
			//"<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss.css": "<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/**/*.scss" // destination file and source file
			//"<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss.css": "<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss" // destination file and source file
			"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.scss.css": "<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/styles/app.scss"
		}
	},
	builder__lll_angular_v1__dist_sass:
	{
		options:
		{
			style: 'compressed',
			sourcemap: 'none'
		},
		files:
		{
			//"<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss.css": "<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/**/*.scss" // destination file and source file
			//"<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss.css": "<%= build.targets.dev %>/public/<%= grunt.task.current.args[0] %>/styles/<%= grunt.task.current.args[0] %>.scss" // destination file and source file
			"<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/app.min.css": "<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/styles/app.scss"
		}
	}
}
