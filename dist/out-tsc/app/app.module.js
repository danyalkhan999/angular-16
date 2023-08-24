import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, HeaderComponent],
        imports: [BrowserModule],
        providers: [],
        bootstrap: [AppComponent],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map