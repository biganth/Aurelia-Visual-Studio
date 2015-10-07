export class App {  
    configureRouter(config, router){
        config.title = 'Aurelia-Setup';
        config.map([
          { route: ['','main'], name: 'main',      moduleId: './main',      nav: true, title:'Main Page' }
        ]);

        this.router = router;
    }
}