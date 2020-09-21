const files = require.context('./const', false, /\.js$/);
const constants = {};

files.keys().forEach(key => {
    const item = files(key).default;
    Object.assign(constants, item);
});

export default constants;
