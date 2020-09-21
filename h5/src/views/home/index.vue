<template>
    <div class="home">
        <i class="iconfont icongengduo"></i>
        <svg-icon class="icon-icon-test" id="icon-icon-test" />
        <svg-icon class="icon-icon-test" id="icon-quxiao" />
        <i class="iconfont icon-icon-test"></i>
    </div>
</template>
<style scoped>
.icon-icon-test {
    font-size: 40px;
}
</style>
<script>
import constants from '@/commons/constants';
export default {
    mounted() {
        console.log(constants);
    }
};
</script>
