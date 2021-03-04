<template>
    <div>
        <div class="vh100 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
            <navBar/>
            <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-10">
                <div class="text-center text-white mt-8 mb-4">
                    <div class="font-medium text-2xl">
                        DEGDARR <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 px-2 rounded">плюс</span>
                    </div>
                    <div class="font-medium text-2xl">
                        <div class="text-5xl">
                            <div class="my-2">
                                Фильмы и сериалы <br> по подписке DEGDARR.Плюс <br>
                            </div>
                            <div class="text-purple-300 rounded my-2">Первый месяц бесплатно</div>
                        </div>
                        <div class="text-gray-300 my-4">
                            Отменяйте в любой момент, напишем за 3 дня <br> до первого списания
                        </div>
                    </div>
                    <div class="my-2">
                        <button
                                class="ownGradientBtn">
                            Попробовать первый месяц бесплатно
                        </button>
                    </div>
                    <div class="my-2 text-gray-300 text-xl">
                        Подробнее о подписке
                    </div>
                    <div>
                        chevron-down
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import navBar from '@/components/layouts/navBar.vue'

    export default {
        name: 'vh100',
        components: {
            navBar,
        }
    }
</script>
<style>
    .ownGradientBtn {
        @apply bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 px-8 py-4 rounded my-4 text-xl;
    }
    /*.vh100 {*/
    /*    background-image: url("~@/assets/img/movies-bg.jpg");*/
    /*}*/
</style>
