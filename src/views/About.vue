<template>
    <div class="about">
        <!--<sideBar/>-->
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="border border-red-800 p-12 bg-gray-100 min-h-screen">
                <!--Обучение-->
                <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                </div>
                <!--Тарифы-->
                <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                    <div class="grid-1">
                        <div class="bg-blue-500 text-white p-4 rounded-lg">
                            <div class="text-2xl font-bold mb-8">
                                Пакет мини
                            </div>
                            <div class="font-medium">
                                100 тестирований
                            </div>
                            <div class="flex items-center mb-8">
                                <div class="text-2xl font-bold">
                                    19 800 Тг
                                </div>
                                <div class="font-medium ml-2">
                                    198 тг/тест
                                </div>
                            </div>
                            <div class="mb-8">
                                Количество тестов в тарифе <br>
                                рассчитано для найма 1-3 сотрудников
                            </div>
                            <div>
                                <button class="text-black px-8 py-1 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid-2">
                        <div class="grid-1">
                            <div class="bg-blue-500 text-white p-4 rounded-lg">
                                <div class="text-2xl font-bold mb-8">
                                    Пакет мини
                                </div>
                                <div class="font-medium">
                                    100 тестирований
                                </div>
                                <div class="flex items-center mb-8">
                                    <div class="text-2xl font-bold">
                                        19 800 Тг
                                    </div>
                                    <div class="font-medium ml-2">
                                        198 тг/тест
                                    </div>
                                </div>
                                <div class="mb-8">
                                    Количество тестов в тарифе <br>
                                    рассчитано для найма 1-3 сотрудников
                                </div>
                                <div>
                                    <button class="text-black px-8 py-1 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--<div class="warningCard shadow-lg rounded-lg mt-12">
                    <div class="warningCardHeader p-4 font-medium">
                        {{ warningCard.title }}
                    </div>
                    <div class="warningCardContent px-8 py-4">
                        <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                            <div class="flex items-center gap-4 mt-5">
                                <div>
                                    <img src="../assets/e-mail.png" alt="">
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Введите почту тестируемого"
                                                class="border rounded-lg border-transparent py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
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
                        <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
                </div>-->


                <!---->
                <!--<table class="warningCard shadow-lg rounded-lg mt-12 overflow-auto md:overflow-scroll">
                    <thead class="warningCardHeader font-medium">
                    <tr>
                        <th class="w-1/4">{{ warningTable.eMail.title }}</th>
                        <th class="w-1/6">{{ warningTable.fullName.title }}</th>
                        <th class="w-1/6">{{ warningTable.phoneNumber.title }}</th>
                        <th class="w-1/6">{{ warningTable.sentBy.title }}</th>
                        <th class="w-1/6">{{ warningTable.status.title }}</th>
                        <th class="w-1/6">{{ warningTable.results.title }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{ warningTable.eMail.content }}</td>
                        <td>{{ warningTable.fullName.content }}</td>
                        <td>{{ warningTable.phoneNumber.content }}</td>
                        <td>{{ warningTable.sentBy.content }}</td>
                        <td>{{ warningTable.status.content }}</td>
                        <td>{{ warningTable.results.content }}</td>
                    </tr>
                    <tr>
                        <td>{{ warningTable.eMail.content }}</td>
                        <td/>
                        <td/>
                        <td/>
                        <td>{{ warningTable.status.content }}</td>
                        <td>{{ warningTable.results.content }}</td>
                    </tr>
                    <tr>
                        <td>{{ warningTable.eMail.content }}</td>
                        <td>{{ warningTable.fullName.content }}</td>
                        <td>{{ warningTable.phoneNumber.content }}</td>
                        <td>{{ warningTable.sentBy.content }}</td>
                        <td>{{ warningTable.status.content }}</td>
                        <td><img src="../assets/pdf.png" alt=""></td>
                    </tr>
                    </tbody>
                </table>-->


                <transition name="bounce">
                    <div v-if="show" class="mt-14 flex justify-center absolute bottom-24 mx-4 right-1 sm:right-1 md:right-6 lg:right-6 lg:w-96 md:w-96 sm:w-auto">
                            <div class="bg-white shadow-lg rounded-lg">
                                <div class="chatDiv">
                                    <div class="chatHeader rounded-t-lg w-full bg-yellow-400 py-4 text-white font-medium flex justify-between items-center">
                                        <div></div>
                                        <div class="text-xl">
                                            {{ chat.btnTitle }}
                                        </div>
                                        <div class="flex items-center mr-2">
                                            <!--<a href="#"><img src="../assets/minus.png" alt=""></a>-->
                                            <a href="#" v-on:click="show = !show"><img src="../assets/times.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="chatBody">
                                        <div class="chatUnderHeader shadow-lg py-2 px-4 flex items-center">
                                            <img src="../assets/questions.png" alt="" class="mr-4">
                                            У вас есть вопросы? <br>
                                            Задавайте свой вопросы
                                        </div>
                                        <div class="mt-8 py-8">

                                            <!--chat's here-->
                                            <div class="chat-message">
                                                <div class="flex items-end justify-end my-4 mx-2">
                                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                        <div>
                                                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-yellow-400 text-black ">
                                                    Здравствуйте !
                                                    у меня закончился баланс тестов
                                                    можно ли купить определнное количество тестов а не пакет?
                                                </span>
                                                        </div>
                                                    </div>
                                                    <img src="../assets/user_cat.png" alt="First User" class="w-10 h-10 rounded-full order-2">
                                                </div>
                                            </div>
                                            <div class="chat-message">
                                                <div class="flex items-end my-4 mx-2">
                                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                        <div>
                                                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                    Здравствуйте !
                                                    Нет тесты можно приобрести только ввиде пакетов
                                                </span>
                                                        </div>
                                                    </div>
                                                    <img src="../assets/user_puppy.png" class="w-10 h-10 rounded-full order-1" alt="Second User"/>
                                                </div>
                                            </div>
                                            <!--/chat's here-->
                                            <div class="flex items-center mt-12">
                                                <label class="mx-2 w-5/6 flex">
                                                    <input placeholder="Введите сообщение..."
                                                           class="w-full border border-gray-400 rounded-lg border-transparent py-2 px-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                                </label>
                                                <a href="#" class="mx-2 w-1/6">
                                                    <img src="../assets/paper_plane.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </transition>
                <div class="mt-14 flex justify-end absolute bottom-6 right-6">
                    <button v-on:click="show = !show"
                            class="flex items-center bg-yellow-400 py-2 px-4 rounded-full font-medium focus:outline-none collapsible">
                        <img src="../assets/chat.png" alt="">
                        <span class="ml-4">{{ chat.btnTitle }}</span>
                    </button>
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
                /*chat*/
                show: false,
                chat: {
                    btnTitle: 'Поддержка',
                },
                warningCard: {
                    title: 'Отправить тест',
                    uploadTable: 'Загрузить таблицу:',
                    sendButton: 'Отправить тест',
                    chooseYourTest: 'Выберите вид теста',
                },
                warningTable: {
                    eMail: {
                        title: 'Почта', content: 'bektursyn.dastan@gmail.com',
                    },
                    fullName: {
                        title: 'ФИО', content: 'Бектурсын Дастан',
                    },
                    phoneNumber: {
                        title: 'ТЕЛЕФОН', content: '+7(707)516-50-42',
                    },
                    sentBy: {
                        title: 'Отправлено', content: '03.02.21 13:15',
                    },
                    status: {
                        title: 'Статус', content: 'Готово',
                    },
                    results: {
                        title: 'Результаты', content: '',
                    },
                }
            };
        },
    }
</script>
<style>
    .bor {
        border: 1px solid red;
    }
    .warningCardHeader {
        background: #FFCC00;
    }
    .gray_button {
        @apply text-white px-4 py-1 bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 rounded shadow-lg
    }
    .primary_button {
        @apply text-white px-4 py-1 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded shadow-lg
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
