<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
export default {
    components: {
        [Tag.name]: Tag,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]: GoodsActionButton
    },
    data() {
        return {
            goods: {
                title: '美国伽力果（约680g/3个）',
                price: 2680,
                express: '免运费',
                remain: 19,
                thumb: [
                    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                ]
            }
        };
    },
    methods: {
        formatPrice() {
            return '¥' + (this.goods.price / 100).toFixed(2);
        },
        onClickCart() {
            this.$router.push('cart');
        },
        sorry() {
            Toast('暂无后续逻辑~');
        }
    },
    mounted() {
        this.$request('getVerifyServ').then();
    }
};
</script>
