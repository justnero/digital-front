<template>
    <div class="search">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import {latLng} from 'leaflet'

    export default {
        name: 'search',
        data: () => ({
            zoom: 13,
            center: latLng(47.413220, -1.219482),
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: latLng(47.413220, -1.219482),
        }),
        computed: {},
        components: {},
        mounted() {
            this.$nextTick(() => {
                // this.$refs.myMap.mapObject.();
            });
        },
    }
</script>

<style>
    .search {
        height: 100%;
        margin-top: -56px;
        padding-top: 56px;
    }
</style>
