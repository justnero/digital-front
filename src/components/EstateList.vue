<template>
    <div class="estate-list">
        <div class="container">
            <div class="row" v-for="row in rows" :key="row.id">
                <estate-card v-for="offer in row.offers"
                             :key="offer.id"
                             :offer="offer"/>
            </div>
        </div>
    </div>
</template>

<script>
    import EstateCard from '@/components/EstateCard'
    import Offer from '@/api/offer'

    export default {
        name: 'EstateList',
        props: ['filters'],
        data: () => ({}),
        asyncComputed: {
            async offers() {
                return Offer.filtered(this.filters);
            },
        },
        computed: {
            rows() {
                const rows = [];
                if (this.offers) {
                    for (let i = 0; i < Math.ceil(this.offers.length / 4); i++) {
                        rows.push({
                            id: i,
                            offers: this.offers.slice(i * 4, (i + 1) * 4)
                        });
                    }
                }
                return rows;
            },
        },
        components: {
            EstateCard,
        },
    }
</script>
