module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['*.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
      }
    },
    nodeunit: {
      all: ['test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('default', ['jshint', 'nodeunit']);
};
