<template>
    <fragment>
        <div class="search">
            <l-map :zoom="zoom" :center="center" v-if="offer">
                <l-tile-layer :url="url"/>
                <l-marker :lat-lng="center" :icon="markerIcon" class="marker-primary">
                    <l-tooltip :options="{ permanent: true, interactive: true }">
                        Ваш выбор
                    </l-tooltip>
                </l-marker>
            </l-map>
        </div>
        <estate-show :offer="offer" v-if="offer"/>
    </fragment>
</template>

<script>
    import EstateShow from '@/components/EstateShow'
    import Offer from '@/api/offer'
    import {Icon, latLng} from 'leaflet'

    export default {
        name: 'offer',
        props: ['id'],
        data: () => ({
            zoom: 14,
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        }),
        computed: {
            center() {
                return this.offer ? latLng(this.offer.latitude, this.offer.longitude) : null;
            },
            markerIcon() {
                const CustomIcon = Icon.extend({
                    options: {
                        iconSize: [40, 40],
                        shadowSize: [50, 64],
                        iconAnchor: [20, 40],
                        shadowAnchor: [4, 62],
                        popupAnchor: [-3, -76]
                    }
                });
                const url = encodeURI('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#f8cf2c" stroke="black" stroke-width="5" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" class=""></path></svg>').replace('#', '%23');
                return new CustomIcon({iconUrl: url});
            }
        },
        methods: {
            filter(filters) {
                this.filters = filters;
            },
        },
        asyncComputed: {
            async offer() {
                return await Offer.get(this.id);
            },
        },
        mounted() {

        },
        components: {
            EstateShow,
        },
    }
</script>
