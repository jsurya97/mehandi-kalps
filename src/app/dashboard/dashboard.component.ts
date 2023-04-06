import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "../../assets/image/banner-01.png"},
    {img: "../../assets/image/banner-02.jpg"},
    {img: "../../assets/image/banner-03.jpg"},
    {img: "../../assets/image/banner-04.jpg"},
    {img: "../../assets/image/mehandigif.gif"}
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay" : true,
    "autoplaySpeed" : 1000,
    "arrows":false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  slickInit(e:any) {
    console.log('slick initialized');
  }
     
  breakpoint(e:any) {
    console.log('breakpoint');
  }
     
  afterChange(e:any) {
    console.log('afterChange');
  }
     
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
  }

}
