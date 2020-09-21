<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="scss" src="./assets/scss/app.scss"></style>
<style scoped>
#app {
    height: 100%;
}
</style>
<script>
/* eslint-disable */
if (process.env.NODE_ENV === 'development') {
    import('@/assets/scss/iconfont/iconfont.css');
} else {
    import('@/assets/scss/iconfont/iconfont.css');
}
</script>
