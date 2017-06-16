import "./app.component.scss";
import "./favicon.png";

import * as angular from "angular";
import "../../dist/angular-filter";

import AppService from "./app.service";
import AppComponent from "./app.component";

angular
    .module("app", ["angularFilterModule"])
    .service("appService", AppService)
    .component("app", new AppComponent());