import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const routes: Routes = [

  {
    path: 'mfe-angular',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfeAngular',
        exposedModule: './AppComponent',
      }).then(m => m.AppComponent),
  },
  {
    path: 'mfe-react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfeReact',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'mfe-vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry: "http://localhost:4003/remoteEntry.js",
      remoteName: "mfeVue",
      exposedModule: "./HelloWord",
      elementName: 'vue-element'
    } as WebComponentWrapperOptions
  },
];

