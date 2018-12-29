import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   news: any;
  
   constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getNews()
    .then(data => {
      this.news = data;
      console.log(this.news);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    console.log(this.news);

  }
  getNews() {
    
    return new Promise((resolve, reject) => {
      let apiUrl = 'https://www.vina.cc/wp-json/wp/v2/posts';
      this.http.get(apiUrl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
