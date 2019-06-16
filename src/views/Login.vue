<template>
    <div class="signin-wrap">
        <form class="form-signin text-center" @submit.prevent="signin">
            <img class="mb-4" src="@/assets/logo.svg" alt="" width="72" >
            <h1 class="h3 mb-3 font-weight-normal">Пожалуйста войдите</h1>
            <label for="inputEmail" class="sr-only">Email</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" v-model="email" required
                   autofocus>
            <label for="inputPassword" class="sr-only">Пароль</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" v-model="password"
                   required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" v-model="remember"> Запомнить меня
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
    </div>
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'login',
        data: () => ({
            email: '',
            password: '',
            remember: false,
        }),
        methods: {
            signin() {
                fetch(`${API_BASE}/auth`, {
                    method: 'POST',
                    // mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Email: this.email,
                        Password: this.password,
                        RememberMe: this.remember ? '1' : '0',
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data === 'Success') {
                            localStorage.setItem('authenticated', 'true');
                            this.$emit('loggedIn');
                            if (this.$route.params.nextUrl != null) {
                                this.$router.push(this.$route.params.nextUrl)
                            } else {
                                this.$router.push('schedule');
                            }
                        }
                    })
            },
        },
    }
</script>

<style scoped>
    .signin-wrap {
        height: 100%;
        display: flex;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
