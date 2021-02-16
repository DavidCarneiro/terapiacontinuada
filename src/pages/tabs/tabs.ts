import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyChangesPage } from '../my-changes/my-changes';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { NewsPage } from '../news/news';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoProvider } from '../../providers/service/user-info';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  changes: any = MyChangesPage
  home: any = HomePage
  user: any = UserPage
  news: any = NewsPage
  valbadge: any
  email: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: ServiceProvider,
              public uInfo: UserInfoProvider) {
       this.email = this.uInfo.email;
       this.getNew()
  }

  ionViewDidLoad() {
    
    //console.log('ionViewDidLoad TabsPage:'+data);
  }
  getNew(){
    this.service.getNewItem(this.email)
      .subscribe(data => {
        this.valbadge = data
        console.log(data);
      },
    err => console.log(err))
    setInterval(() => {
      this.service.getNewItem(this.email)
      .subscribe(data => {
        this.valbadge = data
        console.log(data);
      },
    err => console.log(err))
    },9000)
  }

}
