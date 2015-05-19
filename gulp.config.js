module.exports = function () {
    var client = './src/client/';

    var config = {
        /**
         * File paths
         */
        temp: './.tmp/',
        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        less: client + 'styles/styles.less'
    };

    return config;
};
