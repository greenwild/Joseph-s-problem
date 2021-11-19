//约瑟夫问题
//用JS写了个小程序，chrome浏览器右键点击检查，选console 复制下面内容，黏贴回车就能运行：
let N=8; //总人数
let K=3; //间隔数
let f=1,n=1;
while(N>1){
n++;
f=f+K;
if (f>n){
  f=f-n;}
N--;
}
console.log("The survivor is No."+f);
