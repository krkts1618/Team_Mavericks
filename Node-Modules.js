const os=require("os");
console.log("====== OS INFORMATION =======")
console.log("Platform: ",os.platform());
console.log("Architecture: ",os.arch());
console.log("Hostname: ",os.hostname());
console.log("Total Memory: ",os.totalmem());
console.log("Free Memory: ",os.freemem());
console.log("CPU Cores: ",os.cpus().length);

console.log("====== PATH INFORMATION =======")
const path=require("path");
console.log("Current Path :",process.cwd());
console.log("File Name :",path.basename(__filename));
console.log("Extension :",path.extname(__filename));
console.log("Directory :",path.dirname(__filename));

console.log("====== URL INFORMATION =======")
const {url}=require("url");
const myUrl=new URL("https://example.com/category/product?id=123");
console.log("Protocal :",myUrl.protocol);
console.log("HostName :",myUrl.hostname);
console.log("PathName :",myUrl.pathname);
console.log("Category :",myUrl.searchParams.get("category"));
console.log("Product ID :",myUrl.searchParams.get("id"));




