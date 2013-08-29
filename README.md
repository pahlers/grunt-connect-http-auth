# grunt-connect-http-auth

> Http-auth middleware for grunt-connect.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-connect-http-auth --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-connect-http-auth');
```

## The "connect_http_auth" task

### Overview
In your project's Gruntfile, add a section named `auth` to the `connect` data object passed into `grunt.initConfig()`. You find the configurations in the [`http-auth` project](https://github.com/gevorg/http-auth#configurations).

```js
grunt.initConfig({
  connect: {
    auth:{
      authRealm : "Private server",
      authList : ['foo:bar']
    }
  },
})
```
####
Adding the middleware
Expose the proxy function to use in the middleware, at the top of the grunt file:
```js
var authRequest = require('grunt-connect-http-auth/lib/utils').authRequest;
```

Add the middleware call from the connect option middleware hook
```js
connect: {
    livereload: {
        options: {
            middleware: function (connect) {
                return [
                    authRequest
                ];
            }
        }
    }
}
```

## Release History
_(Nothing yet)_
