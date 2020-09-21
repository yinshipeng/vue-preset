module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/rolloutapi': {
                target: 'http://rollout.hipland.net',
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `$imgUrl: "${process.env.VUE_APP_IMG_URL}";`
            }
        }
    }
};
