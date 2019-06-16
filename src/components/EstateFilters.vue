<template>
    <div class="header-filters">
        <div class="container">
            <div class="filters">
                <div class="row">
                    <div class="col">
                        <v-select placeholder="Аренда и покупка"
                                  :options="['Аренда','Покупка']"
                                  v-model="type"/>
                    </div>
                    <div class="col" v-if="type === 'Аренда'">
                        <v-select placeholder="Срок аренды"
                                  :options="['Посуточно','Длительно']"
                                  v-model="unit"/>
                    </div>
                    <div class="col">
                        <v-select multiple
                                  placeholder="Округ"
                                  label="name"
                                  :options="districts"
                                  v-model="district"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>Цена:</label>
                        <vue-slider height="14px"
                                    :min="2300"
                                    :max="7800000"
                                    :step="1000"
                                    :contained="true"
                                    v-model="price"/>
                        <div class="row">
                            <div class="col-6 text-left">2 300 руб.</div>
                            <div class="col-6 text-right">7 800 000 руб.</div>
                        </div>
                    </div>
                    <div class="col">
                        <label>Площадь:</label>
                        <vue-slider height="14px"
                                    :min="28"
                                    :max="114" :contained="true"
                                    v-model="area"/>
                        <div class="row">
                            <div class="col-6 text-left">28 м<sup>2</sup></div>
                            <div class="col-6 text-right">114 м<sup>2</sup></div>
                        </div>
                    </div>
                    <div class="col">
                        <label>Количество комннат:</label>
                        <vue-slider height="14px"
                                    :min="1"
                                    :max="5"
                                    :contained="true"
                                    v-model="rooms"/>
                        <div class="row">
                            <div class="col-6 text-left">1</div>
                            <div class="col-6 text-right">5</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3" v-for="filter in filters" :key="filter.type">
                        <div class="checkbox">
                            <b-form-checkbox :name="filter.type" value="true" v-model="stats[filter.type]">
                                <fa-icon :icon="filter.icon" class="text-primary"/>
                                {{ filter.text }}
                            </b-form-checkbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueSlider from 'vue-slider-component'
    import District from "@/api/district";

    export default {
        name: 'EstateFilters',
        data: () => ({
            districts: [],
            filters: [
                {
                    type: 'pharmacy',
                    icon: 'first-aid',
                    text: 'Аптека',
                },
                {
                    type: 'market',
                    icon: 'shopping-basket',
                    text: 'ТЦ',
                },
                {
                    type: 'school',
                    icon: 'graduation-cap',
                    text: 'Школа / детский сад',
                },
                {
                    type: 'bus',
                    icon: 'bus',
                    text: 'Остановка',
                },
                {
                    type: 'cafe',
                    icon: 'utensils',
                    text: 'Ресторан',
                },
                {
                    type: 'hospital',
                    icon: 'hospital',
                    text: 'Больница',
                },
                {
                    type: 'cinema',
                    icon: 'film',
                    text: 'Кино',
                },
                {
                    type: 'theatre',
                    icon: 'theater-masks',
                    text: 'Театр',
                },
            ],
            type: null,
            unit: null,
            district: [],
            area: [28, 114],
            price: [2300, 7800000],
            rooms: [1, 5],
            stats: {
                farmacy: false,
                market: false,
                school: false,
                bus: false,
                cafe: false,
                hospital: false,
                cinema: false,
                theater: false,
            },
        }),
        computed: {
            typeId() {
                switch (this.type) {
                    case 'Аренда':
                        return 'rent';
                    case 'Покупка':
                        return 'sell';
                    default:
                        return null;
                }
            },
            unitId() {
                switch (this.type) {
                    case 'Посуточно':
                        return 'day';
                    case 'Долгосрочно':
                        return 'month';
                    default:
                        return null;
                }
            },
            districtConfig() {
                return this.district.map(district => district.id);
            },
            statsConfig() {
                const stats = [];
                Object.keys(this.stats)
                    .forEach(k => {
                        if (this.stats[k] === true || this.stats[k] === 'true') {
                            stats.push(k);
                        }
                    });

                return stats.join(',');
            },
            filtersConfig() {
                return {
                    type: this.typeId,
                    unit: this.unitId,
                    district: this.districtConfig,
                    area: this.area,
                    price: this.price,
                    rooms: this.rooms,
                    stats: this.statsConfig,
                };
            },
        },
        watch: {
            filtersConfig() {
                this.$emit('filter', this.filtersConfig);
            },
            '$route'() {
                this.populateQuery();
            },
        },
        methods: {
            populateQuery() {
                if (this.$route.query.district) {
                    const district = this.districts.find(district => district.id === parseInt(this.$route.query.district));
                    if(district) {
                        this.district = [district];
                    }
                }
                if (this.$route.query.type) {
                    this.type = this.$route.query.type === 'sell' ? 'Покупка' : 'Аренда';
                }
            },
        },
        components: {
            VueSlider,
        },
        mounted() {
            District.all()
                .then(data => {
                    Vue.set(this, 'districts', data);
                    this.populateQuery();
                });
        },
    }
</script>
