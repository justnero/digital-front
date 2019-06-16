<template>
    <fragment>
        <header-block/>
        <estate-filters @filter="filter"/>
        <estate-list :filters="filters"/>
    </fragment>
</template>

<script>
    import HeaderBlock from '@/components/HeaderBlock'
    import EstateFilters from '@/components/EstateFilters'
    import EstateList from '@/components/EstateList'

    export default {
        name: 'home',
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
            EstateFilters,
            EstateList,
        },
    }
</script>
