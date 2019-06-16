<template>
    <div class="header-filters">
        <div class="container">
            <div class="filters">
                <div class="row">
                    <div class="col">
                        <v-select placeholder="Цель"
                                  required
                                  :options="['Покупка/Аренда','Строительство нового социального объекта']"
                                  v-model="type"/>
                    </div>
                    <div class="col" v-if="type === 'Аренда'">
                        <v-select placeholder="Срок аренды"
                                  :options="['Посуточно','Длительно']"
                                  v-model="unit"/>
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
    export default {
        name: 'DistrictFilters',
        data: () => ({
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
                    case 'Покупка/Аренда':
                        return 'buy';
                    case 'Строительство нового социального объекта':
                        return 'build';
                    default:
                        return null;
                }
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
                    stats: this.statsConfig,
                };
            },
        },
        watch: {
            filtersConfig() {
                this.$emit('filter', this.filtersConfig);
            },
        },
        components: {},
    }
</script>
