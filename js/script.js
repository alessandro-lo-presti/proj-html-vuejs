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
    ]
  }
});
