<template>
    <div>
        <nav class="">
            <div class="">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="">
                            <img src="src/assets/mainLogo.png" alt="">
                            <router-link to="/about">About</router-link>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <!-- Profile dropdown -->
                        <div class="ml-3 relative">
                            <div>
                                <button class="menuButtons">
                                    {{ menu.signIn }}
                                </button>
                                <button class="menuButtons">
                                    {{ menu.registration }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <button class="text-white py-2 px-8 border border-white rounded-full font-medium mx-2">
                        {{ menu.signIn }}
                    </button>
                    <button class="text-white py-2 px-8 border border-white rounded-full font-medium mx-2">
                        {{ menu.registration }}
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'navBar',
        data: () => {
            return {
                menu: {
                    signIn: 'ВОЙТИ',
                    registration: 'РЕГИСТРАЦИЯ',
                },
            };
        },
    }
</script>
<style>
    .menuButtons {
        @apply  py-2 px-8 border-2 border-black rounded-full font-medium mx-2 focus:border-gray-400 focus:text-gray-400 focus:outline-none
    }
</style>
