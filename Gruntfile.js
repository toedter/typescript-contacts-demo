module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'spec/*Spec.js',
                keepRunner: true
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                options: {
                    // module: 'commonjs', // or amd
                    target: 'es5', //or es3
                    // base_path: 'path/to/typescript/files',
                    sourcemap: true
                    // declaration: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['typescript', 'jasmine']);
};
