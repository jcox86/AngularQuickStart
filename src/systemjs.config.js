/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // Material Design
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      // DevExtreme & DevExtreme deps
      'devextreme': 'npm:devextreme',
      'jquery': 'npm:jquery/dist/jquery.min.js',
      'jszip': 'npm:jszip/dist/jszip.min.js',
      'devextreme-angular': 'npm:devextreme-angular',
      // other libraries
      'ng2-toastr': 'npm:ng2-toastr',
      '@covalent/core': 'npm:@covalent/core/core.umd.js',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          },
          './*.scss' : { loader: 'sass' }
        }
      },
      rxjs: { defaultExtension: 'js' },
      'devextreme-angular': { main: 'index.js', defaultExtension: 'js' },
      'devextreme': { defaultExtension: 'js' },
      'ng2-toastr': { main: 'ng2-toastr.js', defaultExtension: 'js' },
    }
  });
})(this);
