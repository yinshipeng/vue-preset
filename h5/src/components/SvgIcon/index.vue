<template>
    <svg v-if="iconId" class="svgicon" aria-hidden="true">
        <use :xlink:href="iconId"></use>
    </svg>
</template>
<style lang="scss" scoped>
.svgicon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
<script>
/** 如有图标更新，拷贝svg路径地址，在线打开将js内容拷入index.js文件中 */
import './index';
export default {
    name: 'svg-icon',
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconId() {
            return this.id ? `#${this.id}` : '';
        }
    }
};
</script>
