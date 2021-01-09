import express from 'express'


const port = 3000;
const app = express();

// do for the middle wares 
// setting barbel for import and export default to project
// ref https://medium.com/@somprasongd/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89-import-export-%E0%B9%83%E0%B8%99-node-js-10-56feadef9277

app.listen(port, () => {
    console.log('hello world')
}) 