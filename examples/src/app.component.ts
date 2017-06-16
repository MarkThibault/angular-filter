const template = require("./app.component.html");
import AppService from "./app.service";
import { PostsResponseClass } from "./app.models";

export default class AppComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {};
        this.transclude = true;
        this.controller = AppController;
        this.controllerAs = "app";
        this.templateUrl = template;
    }
}

export class AppController {
    postsFilterLabel: string;
    postsFilterDisable: boolean;
    postsFilterText: string;
    posts: Array<PostsResponseClass>;

    static $inject = ["appService"];
    constructor(
        private appService: AppService
    ) { }

    $onInit() {
        this.postsFilterDisable = false;
        this.postsFilterLabel = "Posts Filter";
        this.postsFilterText = "";
        this.appService.getPosts().then(data => {
            this.posts = data;
        });
    };
    updatePostsFilterText(event) {
        this.postsFilterText = event.text;
    };

    disablePostsFilter() {
        this.postsFilterDisable = !this.postsFilterDisable;
    }
    shouldDisable() {
        return this.postsFilterDisable;
    }
}