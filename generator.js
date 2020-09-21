module.exports = (api, options) => {
    api.extendPackage({
        script: {
            test: 'vue-cli-servuce command',
        },
    });
    api.render(`./${options.template}`);
};
