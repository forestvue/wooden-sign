const vueloaderPlugin= require("vue-loader/lib/plugin");

module.exports = {
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]

        
    },
    plugins :[
        new vueloaderPlugin()
    ]
};