<template>
    <div>
        <nav class="">
            <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-10 border-b border-gray-200">
                <div class="relative flex items-center justify-between h-16 text-white">
                    <div>
                        <span class="text-2xl font-extrabold">Movie-App <i class="text-yellow-500">HD</i></span>
                    </div>
                    <div class="font-base ">
                        <a href="#" class="px-3 py-2 text-sm font-medium border-b-2 pb-2">
                            Мое кино
                        </a>
                        <a href="#"
                           class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                            Магазин
                        </a>
                        <span>
                            <img class="img-fluid" src="/src/assets/img/icons/search.svg" alt=""/>
                        </span>
                    </div>
                    <div class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Войти
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'navBar'
    }
</script>
