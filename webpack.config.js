/* eslint-disable no-undef */
const htmlplugins = require("html-webpack-plugin")
const copyplugin = require("copy-webpack-plugin")


module.exports = {
    entry:"./dev_school_front/travel_website/src/main.js",
    plugins: [
        new htmlplugins({template: "./dev_school_front/travel_website/homepage.html"}),
        // new copyplugin({pattern: [
        //     {from: "./dev_school_front/travel_website", to:"./dev_school_front/travel_website"}
        // ]})
    ],
    devServer: {
        historyApiFallback: true
    },
    devtool:"eval-source-map"
}
