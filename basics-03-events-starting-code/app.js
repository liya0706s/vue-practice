
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },
  methods:{
    confirmInput(){
      this.confirmName=this.name;
    },
    submitForm(){
      // event.preventDefault();
      alert('Submitted!');
    },
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Lee';
    },
    setName(event){
      this.name=event.target.value;
    },
    add(num){
      this.counter= this.counter + num;
    },
    reduce(num){
      this.counter= this.counter - num;
    },
    resetInput(){
      this.name= '';
    }
  }
});

app.mount('#events');
