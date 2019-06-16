<template>
    <div class="col-sm-6 col-md-3 p0">
        <div class="estate-card">
            <div class="meta-type" v-b-tooltip.hover :title="typeName">
                <fa-icon :icon="typeIcon"/>
            </div>
            <div class="item-thumb">
                <router-link :to="{name: 'offer', params: {id: offer.id}}">
                    <img :src="offer.images[0].url" alt="">
                </router-link>
            </div>
            <div class="item-entry overflow">
                <h6>
                    <router-link :to="{name: 'offer', params: {id: offer.id}}">{{ offer.address }}</router-link>
                </h6>
                <div class="dot-hr"></div>
                <div class="item-meta">
                    <span>{{ offer.area }} м<sup>2</sup></span>
                    <span>{{ formattedMoney }} руб.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatMoney} from '@/util/funcs';

    export default {
        name: 'EstateCard',
        props: ['offer'],
        data: () => ({}),
        computed: {
            formattedMoney() {
                return formatMoney(this.offer.price, 0, '.', ' ');
            },
            typeIcon() {
                switch (this.offer.type) {
                    case 'rent':
                        return 'clock';
                    case 'sell':
                    default:
                        return 'key';
                }
            },
            typeName() {
                switch (this.offer.type) {
                    case 'rent':
                        return 'Аренда';
                    case 'sell':
                    default:
                        return 'Покупка';
                }
            },
        },
        components: {},
    }
</script>
