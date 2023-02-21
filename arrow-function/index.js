//function sum(num1,num2) {

 //   return num1 + num2;
//}



const sum = (n1,n2) => {
    return n1+n2;
}

//Exemplos de arrow function
const sum2 = (n1,n2) => n1+n2;

const sum3 = (n1,n2) => {
    return n1+n2;
}

//AF retornando JSON

const getPerson = () => ({name:"Henry", eye:"blue" })
const getPerson2 = () => {
    return {name:"Henry", eye:"blue" };
}

//Arrow Function come scopo this
// This é mais léxico, isto é, ele respeita o escopo de onde ele é criado e não executado.
//Usar a arrow Function dentro de uma funçao da mais previsibilidade de qual será a variável usada. Ela respeita onde está sendo executada.
(() =>  {
    function Person(){
        const that = this;
        that.year = 0;

        setInterval(function(){
            that.year = that.year + 1;
            console.log('Qual that?', that);
            console.log('Qual é a idade?', that.year)
        }, 1000);
    }
    const p1 = new Person();
})();
