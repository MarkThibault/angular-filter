# Angular Filter

This is a filter component. 

## Getting Started

### Prerequisites

### Installing

Add the following to your dependencies:
```
"angular-dropdown": "git://github.com/MarkThibault/angular-dropdown.git",
```

### Usage

#### Inject into angular module:
```
angular.module("app", ["angularFilterModule"])
```

#### Using the component:
```
<angular-filter label="{{app.postsFilterLabel}}" text="app.postsFilterText" on-update="app.updatePostsFilterText($event);" disable="app.shouldDisable()"></angular-filter>

<div ng-repeat="post in app.posts | angularMultiPropertyFilter: ['property1', 'property2', 'property3'] : app.postsFilterText"></div>
```

## Running the tests


## Deployment



## Built With


## Contributing

## Versioning

## Authors

## License

## Acknowledgments
