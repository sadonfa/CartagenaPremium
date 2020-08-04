import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio de sesion',
      url: '/folder/Inbox',
      icon: 'person'
    },
    {
      title: 'Tutorial',
      url: '/folder/Outbox',
      icon: 'document'
    },
    {
      title: 'Buscar',
      url: '/folder/Favorites',
      icon: 'search'
    },
    {
      title: 'Pagar',
      url: '/folder/Archived',
      icon: 'card'
    },
    {
      title: 'Cancelar',
      url: '/folder/Trash',
      icon: 'warning'
    },
    {
      title: 'Cerrar',
      url: '/folder/Spam',
      icon: 'exit'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
