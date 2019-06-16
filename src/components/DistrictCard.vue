<template>
    <div class="row">
        <div class="col p0">
            <div class="district-card">
                <div class="item-entry overflow">
                    <button class="toggle-show btn btn-primary" @click.prevent="show = !show">
                        <fa-icon :icon="show ? 'minus' : 'plus'"/>
                    </button>
                    <h3>
                        <router-link :to="{name: 'home', query: {district: district.id}}">
                            {{ district.name }}
                        </router-link>
                    </h3>
                    <div class="dot-hr"></div>
                    <div class="item-meta">
                        <div class="row">
                            <div class="col-4 item-meta-data" v-for="stat in stats" :key="stat.type">
                                <span><fa-icon :icon="stat.icon" class="text-primary"/></span>
                                <span class="title">{{ stat.name }}</span>
                                <b>{{ stat.value }}</b>
                            </div>
                        </div>
                    </div>
                    <div class="item-meta item-additional-meta" v-if="show">
                        <div class="row">
                            <div class="col-6 item-meta-data" v-for="stat in statsGeneral" :key="stat.type">
                                <span><fa-icon :icon="stat.icon" class="text-secondary"/></span>
                                <span class="title" v-html="stat.name"></span>
                                <b v-html="stat.value"></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-map">
                    <l-map ref="map" :zoom="zoom">
                        <l-tile-layer :url="url"/>
                        <l-polygon :lat-lngs="poly" color="#f8cf2c" fillColor="#f8cf2c"/>
                    </l-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {polygon} from 'leaflet';
    import {STATS, STATS_GENERAL} from '@/util/consts'
    import {formatMoney} from '@/util/funcs'

    export default {
        name: 'DistrictCard',
        props: ['district'],
        data: () => ({
            show: false,
            zoom: 8,
            url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        }),
        computed: {
            poly() {
                return JSON.parse(this.district.boundary).map(coords => [coords[1], coords[0]]);
            },
            stats() {
                const stats = [];
                STATS.forEach(stat => {
                    let total = 0;

                    stat.includes.forEach(incl => {
                        if (this.district.stats[incl]) {
                            total += this.district.stats[incl];
                        }
                    });

                    stats.push({
                        type: stat.type,
                        icon: stat.icon,
                        name: stat.text,
                        value: total,
                    });
                });

                return stats;
            },
            statsGeneral() {
                const stats = [];
                STATS_GENERAL.forEach(stat => {
                    if (!this.district.stats[stat.type]) {
                        return;
                    }

                    stats.push({
                        type: stat.type,
                        icon: stat.icon,
                        name: stat.text,
                        value: formatMoney(this.district.stats[stat.type], 0, '.', ' ') + (stat.suffix || ''),
                    });
                });

                return stats;
            },
        },
        components: {},
        mounted() {
            this.$nextTick(() => {
                this.$refs.map.mapObject.fitBounds(polygon(this.poly).getBounds());
            });
        },
    }
</script>
