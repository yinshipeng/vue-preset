<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    }
};
</script>
