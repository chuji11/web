const path = require('path')

module.exports = {
    devserver:{
        
    },
    mode: 'development',  // 模式  production   development
    entry: './src/index.js',
    output: {
        filename: 'bandle.js',
        path: path.resolve(__dirname, 'dist')
    }
}