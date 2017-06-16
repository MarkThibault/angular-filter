import * as angular from "angular";
import FilterComponent from "./filter.component";
import MultiPropertyFilter from "./multi-property.filter";

angular.module("angularFilterModule", [
    "ngAnimate"
    ])
    .component("angularFilter", new FilterComponent())
    .filter("angularMultiPropertyFilter", MultiPropertyFilter)
    .name;