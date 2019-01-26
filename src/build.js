/**
* 该部分代码作用为，生成单个JS文件
*/
({
    appDir: "./",
    baseUrl: ".",
    // out: 'build/main-built.js',
    // name: 'main',
   

})

/**
 * 该部分代码作用为，会生成全局方法foo.require和foo.define
 * 代替requirejs的require和define全局方法
 *  */
// ({

//     appDir: "./",
//     baseUrl: ".",
//     dir: "./build",
//     // out: 'build/main-built.js',
//     // name: 'src/main',

//     //Put in a mapping so that 'requireLib' in the
//     //modules section below will refer to the require.js
//     //contents.
//     // name: "main",
//     paths: {
//         requireLib: 'libs/requirejs/require'
//     },

//     //Indicates the namespace to use for require/requirejs/define.
//     namespace: "foo",

//     modules: [
//         {
//             name: "foo",
//             include: ["requireLib", "scripts/main"],
//             //True tells the optimizer it is OK to create
//             //a new file foo.js. Normally the optimizer
//             //wants foo.js to exist in the source directory.
//             create: true
//         }
//     ]
// })