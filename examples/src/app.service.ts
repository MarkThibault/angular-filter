import { PostsResponseClass } from "./app.models";

export default class AppService {
    static $inject = ["$http", "$q", "$timeout"];
    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
    ) {
    }

    getPosts(): ng.IPromise<Array<PostsResponseClass>> {
        return this.$http.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return this.$q.reject(error);
            });
    }
}