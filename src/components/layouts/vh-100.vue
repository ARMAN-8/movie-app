<template>
    <div>
        <div class="vh100 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
            <navBar/>
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
    /*.vh100 {*/
    /*    background-image: url("~@/assets/img/movies-bg.jpg");*/
    /*}*/
</style>
