# Mobile Giphy Explorer

Mobile Giphy Explorer is a [Vue.js](https://vuejs.org/) and [Ionic](https://ionicframework.com/) mobile application showcasing basic elements of both frameworks. It allows the users to explore giphs offered by [Giphy Web API](https://developers.giphy.com/) on a mobile device.

![Mobile Giphy Explorer](./giphy-explorer.gif)

## Running the application

1. ensure you have [Node.js](https://nodejs.org/en/) installed
2. clone the repo: `[git clone https://github.com/aljazsim/vue-masterclass-examples.git](https://github.com/aljazsim/mobile-giphy-explorer.git)`
3. go to the source directory: `cd ./mobile-giphy-explorer/`
4. set the Giphy api key
    1. register for a developer account at [https://developers.giphy.com/](https://developers.giphy.com/)
    2. create an app
    3. copy Giphy API key
    4. set the key in `./giphy-explorer/.env` (setting `VUE_APP_GIPHY_API_KEY`)
5. install dependencies: `npm install`
6. run the application as a web application:
    1. run development server: `ionic serve`
    2. open a web browser and go to [http://localhost:8100/](http://localhost:8100/) (port could be different, see your console output)
7. run the application as a native mobile application:
    1. prepare development environment for Ionic applications
        1. install [Ionic CLI](https://ionicframework.com/docs/intro/cli)
        2. Android:
            1. prepare environment for building Android apps (see [here](https://ionicframework.com/docs/developing/android))
            2. run `ionic cap build android`
            3. go to Android Studio
            4. build APK file (menu Build / Build bundle(s) / APK(s) / Build APK(s))
            5. copy APK file to your phone
            6. run APK file and install it
            7. run Giphy Explorer from the launcher
        3. iOS:
            1. prepare environment for building iOS apps see [here](https://ionicframework.com/docs/developing/ios)

## Libraries used

Some of the libraries being used in Giphy Explorer

-   [Vue.js](https://vuejs.org/) (progressive JavaScript framework for developing single page applications),
-   [Ionic](https://ionicframework.com/) (frameworkd for developing cross-platform hybrid mobile applications),
-   [axios](https://axios-http.com/) (promise based HTTP JavaScript client),
-   [qs](github.com/ljharb/qs) (query string parsing library),
-   [Humps](https://github.com/domchristie/humps) (framework for converting JavaScript objects with underscore-case property naming notation to camel-case and back),
-   [Inversify Props](https://github.com/CKGrafico/inversify-props) (dependency injection framework for JavaScript),
-   [vuex](https://vuex.vuejs.org/) (Vue.js state management library),
-   [Vue Router](https://router.vuejs.org/) (Vue.js routing library),
-   [TailwindCSS](https://tailwindcss.com/) (utility CSS framework).
