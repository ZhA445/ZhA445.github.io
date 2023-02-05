<template>
    <h2 class="text-danger">This is Testing VUE, Child Component!</h2>
</template>

<script>
    export default {
        name: 'TestingPart',
        props:{
            age: Number,
        },
        data(){
            return{
                name:'Zin Htet',
                feet:5,
                inches: 6,
            }
        }
}
</script>

<style>

</style>