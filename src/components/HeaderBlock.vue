<template>
    <header class="header" :style="blockStyle">
        <div class="tag-line">Пространство выбора</div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderBlock',
        data: () => ({
            bgImage: '/img/headers/8.jpg',
        }),
        computed: {
            blockStyle() {
                return `background-image: url(${this.bgImage}`;
            },
        },
        components: {}
    }
</script>
