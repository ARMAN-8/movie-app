<template>
    <div class="home">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <navBar/>
            <div class="">
                <div class="grid grid-flow-cols-1 md:grid-flow-cols-2 lg:grid-flow-cols-2 grid-cols-2 grid-rows-2 gap-4 mt-8">
                    <div class="grid-1 p-0">
                        <div>
                            <div class="text-5xl font-extrabold">
                                {{ content.title }}
                            </div>
                            <div class="font-medium mt-12">
                                {{ content.paragraph }}
                            </div>
                            <div class="font-medium mt-12">
                                Тестируйте и измеряйте у кандидатов и <br> текущих сотрудников:
                            </div>
                            <ul id="example-1">
                                <li v-for="item in items" :key="item.message">
                                    {{ item.message }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid-2 p-0">
                        <div class="p-12">
                            <img alt="Vue logo" src="../assets/girl.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import navBar from "../components/landing/navBar";

    export default {
        name: 'Home',
        components: {
            navBar,
        },
        data() {
            return {
                content: {
                    title: 'INTERN TEST',
                    paragraph: `Сервис онлайн-оценки персонала для малого и среднего бизнеса. Повышает скорость и точность найма.`,
                },
                items: [
                    {message: 'Продуктивность'},
                    {message: 'Личностные качества'},
                    {message: 'Интеллект'},
                    {message: 'Вовлеченность'},
                ],
            };
        }
    }
</script>
