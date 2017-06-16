import * as angular from "angular";
export default class FilterComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;

    constructor() {
        this.bindings = {
            disable: "<",
            label: "@",
            text: "<",
            onUpdate: "&"
        };
        this.controller = FilterController;
        this.controllerAs = "filter";
        this.templateUrl = require("./filter.component.html");
    }
}

export class FilterController {
    disable: boolean;
    label: string;
    text: string;
    onUpdate: Function;
    icon: any = this.$sce.trustAsHtml(require("./filter-icon.svg"));

    static $inject = ["$sce"];
    constructor(
        private $sce: ng.ISCEService
    ) { }
    $onInit() {
        this.disable = this.disable ? this.disable : false;
        this.label = this.label ? this.label : "Filter";
    };

    $onChanges(changes) {
        if (changes.text) {
            this.text = angular.copy(changes.text.currentValue);
        }
    };

    updateText() {
        this.onUpdate({
            $event: {
                text: this.text
            }
        });
    };
}