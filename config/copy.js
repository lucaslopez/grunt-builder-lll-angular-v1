module.exports = 
{
	builder__lll_angular_v1__dev_src :
	{
		files:
		[
			{
				cwd : '<%= builder.paths.source %>/<%= grunt.task.current.args[0] %>',
				src : ['**'],
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>',
				expand : true
			}
		]
	},
	builder__lll_angular_v1__dev_partials :
	{
		files:
		[
			{
				cwd : '<%= builder.paths.source %>/<%= grunt.task.current.args[0] %>',
				src : ['modules/**/partials/*.html'],
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials',
				expand : true,
				flatten: true
			}
		]
	},
	builder__lll_angular_v1__dist_src :
	{
		files:
		[
			{
				cwd : '<%= builder.paths.source %>/<%= grunt.task.current.args[0] %>',
				src : ['**'],
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>',
				expand : true
			}
		]
	},
	builder__lll_angular_v1__dist_partials :
	{
		files:
		[
			{
				cwd : '<%= builder.paths.source %>/<%= grunt.task.current.args[0] %>',
				src : ['modules/**/partials/*.html'],
				dest : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials',
				expand : true,
				flatten: true
			}
		]
	}
}