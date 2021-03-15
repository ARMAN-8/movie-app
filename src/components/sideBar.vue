<template>
    <div>
        <div class="sideBar min-h-screen">
            <div>
                <div class="flex items-center justify-center py-8">
                    <img src="../assets/INTERN-TEST.png" alt="">
                </div>
                <div class="mt-12">
                    <div>
                        <img src="../assets/active.png" alt="">
                    </div>
                    <div class="flex items-center justify-center my-12">
                        <div>
                            <img src="../assets/tests.png" alt="">
                        </div>
                        <div class="sideBarText ml-4">
                            {{ content.link_1 }}
                        </div>
                    </div>
                    <div class="flex items-center justify-center mb-8">
                        <div>
                            <img src="../assets/deck.png" alt="">
                        </div>
                        <div class="sideBarText ml-4">
                            {{ content.link_2 }}
                        </div>
                    </div>
                    <div class="flex items-center justify-center mb-8">
                        <div>
                            <img src="../assets/accountCog.png" alt="">
                        </div>
                        <div class="sideBarText ml-4">
                            {{ content.link_3 }}
                        </div>
                    </div>
                    <div class="flex items-center justify-center mb-8">
                        <div>
                            <img src="../assets/bookmark.png" alt="">
                        </div>
                        <div class="sideBarText ml-4">
                            {{ content.link_4 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sideBar',
        data () {
            return {
                content: {
                    link_1: 'Тесты',
                    link_2: 'Тарифы',
                    link_3: `Настройки аккаунта`,
                    link_4: 'Обучение',
                }
            }
        }
    }
</script>
<style>
    .sideBar {
        width: 300px;
        background: rgba(255, 204, 0, 0.92);
    }
    .sideBarText {
        @apply px-2 font-medium font-medium text-xl /*text-white*/
    }
</style>
