<template>
    <div id="carouse">
        <!--<h1>{{name}}</h1>-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../assets/images/1.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/images/1.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/images/1.jpg"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'C-carouse',
        data() {
            return {
                name: 'carouse'
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #carouse {
        /*margin-top: 100px;*/
    }
</style>