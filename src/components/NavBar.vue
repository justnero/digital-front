<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="$route.name !== 'login'">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img src="@/assets/logo.svg" height="45"
                     class="d-inline-block align-top" alt="">
                <span class="brand-name">
                <b>O</b>pen<b>D</b>oors
                </span>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/districts">Рейтинг округов</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home', query: {type: 'sell'}}">Купить</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home', query: {type: 'rent'}}">Арендовать</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-primary" to="/">Добавить объявление</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
    };
</script>
