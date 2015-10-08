export class App {  
    configureRouter(config, router){
        config.title = 'Aurelia-Setup';
        config.map([
          { route: ['','welcome'], name: 'welcome',   moduleId: 'welcome',  nav: true, title:'Home' }
        ]);

        this.router = router;
    }
}