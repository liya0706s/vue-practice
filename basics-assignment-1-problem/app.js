const app = Vue.createApp({
    data(){
        return{
            yourName: 'Angie',
            yourAge: 18,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png'
        }
    },
    methods:{
        calculateAge(){
            return this.yourAge + 5
        },
        randomFavNum(){
            return Math.random();
        }
    }
});

app.mount('#assignment')