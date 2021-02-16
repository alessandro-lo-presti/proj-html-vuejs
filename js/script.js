var app = new Vue({
  el: "#app",
  data: {
    timer: [
      {
        name: "Days",
        value: 26
      },
      {
        name: "Hours",
        value: 01
      },
      {
        name: "Minutes",
        value: 47
      },
      {
        name: "Seconds",
        value: 59
      }
    ],
    newCourses: [
      {
        name: "How to be a DJ? Make Electronic Music",
        type: "Eletctronic",
        img: "img/course-1.jpeg",
        lv: "Advanced",
        lectures: "8",
        hours: "6",
        special: true,
        price: 100
      },
      {
        name: "Nvidia and UE4 Technologies Pratice",
        type: "Nvidia",
        img: "img/course-2.png",
        lv: "Advanced",
        lectures: "8",
        hours: "6",
        special: true,
        price: 90
      },
      {
        name: "Fashion Photography form professional",
        type: "Fashion",
        img: "img/course-3.jpeg",
        lv: "Advanced",
        lectures: "6",
        hours: "6",
        special: true,
        price: 80
      },
      {
        name: "Design Instruments for Communication",
        type: "Communication",
        img: "img/course-4.jpeg",
        lv: "Intermediate",
        lectures: "6",
        hours: "6",
        special: false,
        price: 70
      },
      {
        name: "Nvidia and UE4 Technologies Pratice",
        type: "Nvidia",
        img: "img/course-5.jpg",
        lv: "Intermediate",
        lectures: "6",
        hours: "6",
        special: false,
        price: 60
      },
      {
        name: "Fashion Photography form professional",
        type: "Fashion",
        img: "img/course-6.jpeg",
        lv: "Beginner",
        lectures: "6",
        hours: "6",
        special: false,
        price: 50
      }
    ],
    whyCardData: [
      {
        icon: "fas fa-briefcase",
        title: "Entrepreneurship",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

      },
      {
        icon: "fas fa-rocket",
        title: "Accelerated Learning",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

      },
      {
        icon: "fas fa-thumbs-up",
        title: "Productivity",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

      },
      {
        icon: "fas fa-cog",
        title: "Life Coaching",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

      }
    ],
    feedbackData: [
      {
        icon: "fas fa-user-friends",
        value: 3195,
        text: "Online Learner"
      },
      {
        icon: "fas fa-video",
        value: 23,
        text: "Video Courses"
      },
      {
        icon: "fas fa-images",
        value: 437,
        text: "Slider & Images"
      },
      {
        icon: "fas fa-thumbs-up",
        value: 1440,
        text: "Excelent Reviews"
      },
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
    ],
    footerArticles: [
      {
        img: "img/blog-1b.jpeg",
        title: 'Our main target is to "Developing Yourself as a Leader"',
        date: "August 9, 2018"
      },
      {
        img: "img/blog-2b.jpeg",
        title: 'Those Other College Expenses You Aren\'t Thinking About"',
        date: "June 3, 2015"
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
