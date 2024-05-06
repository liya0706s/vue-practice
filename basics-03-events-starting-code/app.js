
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      // confirmName: ''
      lastName:'',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    },
  },
  computed: {
    // fullname(){
    //   console.log('Running again...');
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Lee';
    // }
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert('Submitted!');
    },
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lee';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
