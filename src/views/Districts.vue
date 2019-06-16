<template>
    <fragment>
        <header-block/>
        <district-filters @filter="filter"/>
        <district-list :filters="filters"/>
    </fragment>
</template>

<script>
    import HeaderBlock from '@/components/HeaderBlock'
    import DistrictFilters from '@/components/DistrictFilters'
    import DistrictList from '@/components/DistrictList'

    export default {
        name: 'districts',
        data: () => ({
            filters: {},
        }),
        computed: {},
        methods: {
            filter(filters) {
                this.filters = filters;
            },
        },
        components: {
            HeaderBlock,
            DistrictFilters,
            DistrictList,
        },
    }
</script>
