new Vue({
  el: "#app",
  
  data: {
    mailList: [],
    counter: 0,
  },

  methods: {
    emailsGenerator() {
      this.mailList = [];

      for (let i = 0; i < 10; i++) {
        this.counter++;
        console.log(this.counter);

        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            this.mailList.push(resp.data.response);
            this.counter--;
            console.log(this.counter);
          })
      }

      console.log(this.counter);
    }
  }
}
)