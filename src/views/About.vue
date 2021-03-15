<template>
    <div class="about">
        <!--<sideBar/>-->
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="border border-red-800 p-12 bg-gray-100 min-h-screen">
                <div class="warningCard shadow-lg rounded mt-12">
                    <div class="warningCardHeader p-4 font-medium">
                        {{ warningCard.title }}
                    </div>
                    <div class="warningCardContent px-8 py-4">
                        <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                            <div class="flex items-center gap-4 mt-5">
                                <div>
                                    <img src="../assets/e-mail.png" alt="">
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Введите почту тестируемого"
                                                class="border border-transparent py-1 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                    </label>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 mt-5">
                                <div class="font-medium">
                                    {{ warningCard.uploadTable }}
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="../assets/upload.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                            <div class="grid-1 col-span-2">
                                <div class="flex items-center gap-4 mt-5">
                                    <div>
                                    <span>
                                        {{ warningCard.chooseYourTest }}
                                    </span>
                                        <div class="grid grid-flow-col-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <button class="primary_button m-2">
                                                {{ warningCard.sendButton }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-2">
                                <div class="flex items-center gap-4 mt-5">
                                    <div class="font-medium">
                                        Тестов на счету:
                                    </div>
                                    <div class="text-2xl">
                                        <span>200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    /*import sideBar from "../components/sideBar";*/

    export default {
        name: 'About',
        components: {
            /*sideBar*/
        },
        data() {
            return {
                warningCard: {
                    title: 'Отправить тест',
                    uploadTable: 'Загрузить таблицу:',
                    sendButton: 'Отправить тест',
                    chooseYourTest: 'Выберите вид теста',
                }
            };
        },
    }
</script>
<style>
    .warningCardHeader {
        background: #FFCC00;
    }
    .gray_button {
        @apply text-white px-4 py-1 bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 rounded shadow-lg
    }
    .primary_button {
        @apply text-white px-4 py-1 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded shadow-lg
    }
</style>
