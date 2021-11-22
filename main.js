const app = new Vue({
    el: '#app',

    data: {
        isLoading: true,
        httpError: false,
        mails:[],
        risultato: ''
    },

    methods:{
        getMail(){
            this.isLoading = true;
            this.mails = [];

            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{

                    const mail = response.data;

                    this.mails.push(mail.response);
                    if(this.mails.length === 10){
                        this.isLoading = false;
                    }
                })

                .catch((error) =>{
                    this.httpError = true;
                })
            }

        },
    },

    mounted(){
        this.getMail()
    },

})