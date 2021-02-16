var app = new Vue({
  el: "#app",
  data: {
    newCourses: [
      {
        name: "How to be a DJ? Make Electronic Music",
        type: "Eletctronic",
        img: "img/course-1.jpeg",
        lv: "Advanced",
        lectures: "8",
        hours: "6",
        special: true
      },
      {
        name: "Nvidia and UE4 Technologies Pratice",
        type: "Nvidia",
        img: "img/course-2.png",
        lv: "Advanced",
        lectures: "8",
        hours: "6",
        special: true
      },
      {
        name: "Fashion Photography form professional",
        type: "Fashion",
        img: "img/course-3.jpeg",
        lv: "Advanced",
        lectures: "6",
        hours: "6",
        special: true
      },
      {
        name: "Design Instruments for Communication",
        type: "Communication",
        img: "img/course-4.jpeg",
        lv: "Intermediate",
        lectures: "6",
        hours: "6",
        special: false
      },
      {
        name: "Nvidia and UE4 Technologies Pratice",
        type: "Nvidia",
        img: "img/course-5.jpg",
        lv: "Intermediate",
        lectures: "6",
        hours: "6",
        special: false
      },
      {
        name: "Fashion Photography form professional",
        type: "Fashion",
        img: "img/course-6.jpeg",
        lv: "Beginner",
        lectures: "6",
        hours: "6",
        special: false
      }
    ],
    sliderCount: 0,
    slider: [
      {
        img: "img/1-100x100.jpg",
        vote: 5,
        title: "Paints of the future",
        review: 'The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the "buzz" is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.'
      },
      {
        img: "img/2-100x100.jpg",
        vote: 4,
        title: "Deserunt mollit anim id est laborum",
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
      },
      {
        img: "img/4-100x100.jpg",
        vote: 3,
        title: "Aliquip ex ea commodo consequat",
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
  methods: {
    prevSlider() {
      this.sliderCount ? this.sliderCount-- : this.sliderCount = this.slider.length - 1;
    },
    nextSlider() {
      (this.sliderCount < this.slider.length - 1) ? this.sliderCount++ : this.sliderCount = 0;
    }
  }
});
