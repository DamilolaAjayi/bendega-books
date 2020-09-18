module.exports = {
    pages: {
        'index': {
            entry: './src/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'store': {
            entry: './src/components/Pages/Store/main.js',
            template: 'public/store.html',
            title: 'Store',
            chunks: [ 'chunk-vendors', 'chunk-common', 'store' ]            
        }
    }
}