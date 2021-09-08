const app = new Vue({
    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ],
        timer: 0,
    },
    methods: {
        prevPhoto(){
            this.counterPhoto -= 1;
            if(this.counterPhoto < 0) this.countePhoto =(this.photos.lenght - 1);

        },
        nextPhoto(){
            this.counterPhoto += 1;
            if(this.counterPhoto == (this.photos.lenght)) this.counterPhoto = 0;

        },
        start () {
            this.timer = setInterval(this.nextPhoto, 3000)
        }
    },
    mounted() {
        this.start();
    }
})