<template>
    <div class="estate-modal">
        <div class="estate-show">
            <div class="meta-type" v-b-tooltip.hover :title="typeName">
                <fa-icon :icon="typeIcon"/>
            </div>
            <div class="item-thumb">
                <carousel :perPage="1" :autoplay="true">
                    <slide v-for="image in offer.images" :key="image.id"><img :src="image.url" alt=""></slide>
                </carousel>
            </div>
            <div class="item-entry overflow">
                <h6>{{ offer.address }}</h6>
                <div class="dot-hr"></div>
                <div class="item-meta">
                    <span>{{ offer.area }} м<sup>2</sup></span>
                    <span>{{ formattedMoney }} руб.</span>
                </div>
                <div class="item-actions">
                    <button class="btn btn-primary btn-block">{{ actionName }}</button>
                </div>
                <div class="item-stats">
                    <div class="row">
                        <div class="col-6 item-meta-data" v-for="stat in stats" :key="stat.type">
                            <span><fa-icon :icon="stat.icon" class="text-primary"/></span>
                            <span class="title">{{ stat.name }}</span>
                            <b>{{ stat.valueName }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatMoney} from '@/util/funcs'
    import {STATS} from '@/util/consts'

    export default {
        name: 'EstateShow',
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
            actionName() {
                switch (this.offer.type) {
                    case 'rent':
                        return 'Снять';
                    case 'sell':
                    default:
                        return 'Купить';
                }
            },
            stats() {
                const stats = [];
                STATS.forEach(stat => {
                    let total = 0;

                    stat.includes.forEach(incl => {
                        if (this.offer.stats[incl]) {
                            total += this.offer.stats[incl];
                        }
                    });

                    let totalName = 'далеко';
                    if (total >= 50) {
                        totalName = 'очень близко';
                    } else if (total >= 25) {
                        totalName = 'близко';
                    } else if (total >= 5) {
                        totalName = 'недалеко'
                    } else if (total >= 1) {
                        totalName = 'далеко'
                    } else {
                        totalName = 'очень далеко';
                    }

                    stats.push({
                        type: stat.type,
                        icon: stat.icon,
                        name: stat.text,
                        value: total,
                        valueName: totalName,
                    });
                });

                return stats;
            },
        },
        components: {},
    }
</script>
