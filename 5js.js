//https://www.cs.hmc.edu/~rhodes/courses/cs124/fa21/exercises/5-Javascript.html
function countX(string){
    let text = string.split("");
    let ans = 0;
    for (var i =0; i<text.length; i++){
        if (text[i] === "x"){
            ans++;
        }
    }
    return ans;
}
console.log(countX("xyzx")) // all tcs passed

function wordCount(string){
    const arr = string.split(" ");
    let obj = {};
    for (let x in arr){
        let word = arr[x]
        if (word in obj){
            obj[word]+=1
        }
        else {
            obj[word]= 1
        }
    }
    return obj


}
console.log(wordCount("This is a test of whether the test is a good test")) //took 5+ tries

class Foo{
    constructor(callback){
        this.callback = callback
    }
    doSomething(value){
        this.callback(value+5)
    }

}
f = new Foo(console.log);
f.doSomething(3); //not sure if this intended solution

class Bar extends Foo{
    constructor(callback, multiplier){
        super(callback)
        this.multiplier = multiplier
    }
    doSomething(value){
        super.doSomething(value * this.multiplier)
    }
}

b = new Bar(console.log, 3)
b.doSomething(3)