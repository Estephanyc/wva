import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  new: any;
  imageNew : any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    console.log('holas')
    this.getNews()
    .then(data => {
      this.new = data;
      //this.imageNew = this.imageNew.guid.renderer;
      console.log(this.new);
    });
  }
  getNews() {
    
    return new Promise((resolve, reject) => {
      let apiUrl = 'https://www.vina.cc/wp-json/wp/v2/posts?per_page=1';
      this.http.get(apiUrl)
        .subscribe(res => {
          /* this.http.get('https://www.vina.cc/wp-json/wp/v2/media/' + res[0].featured_media).subscribe(res2 =>{
            this.imageNew = res2;
          }) */       
          console.log(res)
               resolve(res);

        }, (err) => {
          reject(err);
        });
    });
  }
}
