const app = Vue.createApp({
    data(){
        return{
            yourName: 'Angie',
            yourAge: 18
        }
    },
    computed:{
        ageInFiveYears(){
            return this.yourAge + 5;
        },
        randomFavNum(){
            return Math.random();
        }
    }
});

app.mount('#assignment')