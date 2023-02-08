import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trouser-list',
  templateUrl: './trouser-list.component.html',
  styleUrls: ['./trouser-list.component.scss']
})
export class TrouserListComponent implements OnInit {


  ngOnInit(): void {
  }
  public itemList = [
    {
      name: "Quần 1",
      price: 1,
      image: "https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/08/cach-phoi-do-voi-quan-jean-ong-rong-16-683x1024.png"
    },
    {
      name: "Quần 2",
      price: 2,
      image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2Fc8%2Fc2c86563e70813441d273b2d5522d3feb35a986e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    },{
      name: "Quần 3",
      price: 3,
      image: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2Fe7%2F20e71e9dd6901ad0ba30101dc695d7268ba867a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
    },{
      name: "Quần 4",
      price: 4,
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/0ceaaed5a73bb415d05b0f8b2d1c05745c171466_xxl-1.jpg"
    }
  ];
  constructor(private http:HttpClient, private router:Router) { }

  
    onSee(id:any){
      console.log(id);
      this.router.navigateByUrl(`trouser/quan-${id}`)
    }
    


}
