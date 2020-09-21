/**
 * 全局混入，注意使用！ 一旦使用全局混入对象，将会影响到所有之后创建的Vue实例。
 */
export default {
    computed: {
        isDisabled: function (obj) {
            return function (obj) {
                let result = false;
                for (const key of Object.keys(obj)) {
                    if (!obj[key]) {
                        result = true;
                        break;
                    }
                }
                return result;
            };
        },
        hasPermission() {
            return function (permissionName) {
                return this.$store.getters.getPermissions.includes(permissionName);
            };
        }
    },
    methods: {
        /**
         * 拦截Submit按钮
         * @param {*} bool
         * @param {*} callback
         */
        btnInterceptor(bool, callback) {
            if (!bool) {
                callback();
            }
        },

        /**
         * 页面级跳转
         * @param {路径} path
         * @param {参数} query
         */
        jump(path, query) {
            if (query) {
                path = {
                    path,
                    query
                };
            }
            this.$router.push(path);
        },

        getApiParams(obj) {
            const params = {};
            for (const key of Object.keys(obj)) {
                if (
                    typeof obj[key] === 'number' ||
                    (typeof obj[key] === 'string' && obj[key] !== '') ||
                    (Array.isArray(obj[key]) && obj[key].length > 0)
                ) {
                    params[key] = obj[key];
                }
            }
            return params;
        },
        getCurrentUser() {
            return JSON.parse(localStorage.getItem('userInfo'));
        },
        exortExc(res, name, fileType) {
            const blob = new Blob([res.data], {
                type: 'application/msexcel'
            });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            let fileName = fileType ? name + '.' + fileType : name + '.xlsx';
            console.log(res);
            if (!res.headers) {
                const contentDisposition = res.headers['content-disposition'];
                const fileNameMatch = contentDisposition.split('filename=');
                if (fileNameMatch.length === 2) {
                    const temp = fileNameMatch[1].replace(new RegExp('\\+', 'gm'), '%20');
                    fileName = decodeURIComponent(temp);
                }
            }
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        }
    },
    created() {}
};
