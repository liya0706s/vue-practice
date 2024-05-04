const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            confirmedInput: ''
        };
    },
    methods: {
        showAlert(){
            alert('This works!');
            // build-in vanilla js function 
        },
        saveInput(event){
            this.userInput = event.target.value;
        },
        confirmInput(event){
            this.confirmedInput=event.target.value;
        }
    }
});

app.mount('#assignment')