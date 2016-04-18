
module.exports = 
{
	builder__lll_angular_v1__dist_locales:
	{
		src : ['<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/node_modules/**/locales']
	},
	builder__lll_angular_v1__dist_after:
	{
		src :
		[
			// Clean the modules dir, everything in here has been minified and moved
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/modules',
			// Clean the partials that are pre-cached in app.js
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/partials/*.cache.html',
			// Clean the locales files, they are embedded in app.js
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/locales/*.cache.json',
			// Clean the styles source, it has been compiled and moved
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/styles',
			// Clean buildfile.json
			'<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>/buildfile.json'
		]
	}
};
