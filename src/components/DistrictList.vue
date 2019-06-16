<template>
    <div class="district-list">
        <div class="container">
            <district-card v-for="district in districts" :key="district.id" :district="district"/>
        </div>
    </div>
</template>

<script>
    import DistrictCard from '@/components/DistrictCard'
    import District from '@/api/district'

    export default {
        name: 'DistrictList',
        props: ['filters'],
        data: () => ({}),
        asyncComputed: {
            async districts() {
                return District.filtered(this.filters);
            },
        },
        computed: {},
        components: {
            DistrictCard,
        },
    }
</script>
