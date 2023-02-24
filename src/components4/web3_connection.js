
// import { Web3 } from "web3";

// const providers=new Web3.providers.HttpProvider("http://127.0.0.1:7545");
// var web3=new Web3(providers);


// const Calculator= require('../contract/calculator.json');

// async function createInstance(){
//     const accounts= await web3.eth.getAccounts();
//     const networkId=  await web3.eth.net.getId();
//     console.log(accounts);
//     const address= Calculator.networks[networkId];
    

//     const instance= await new web3.eth.Contract(
//         Calculator.abi,
//         address
//     )
// // console.log(instance.methods);
//     return {instance, accounts};

// }

// async function addNumbers(account, contractInstance,num1, num2){
//     const {instance, accounts} = await createInstance();
//       const res = await instance.methods.plus(num1, num2)
//     .send({from: accounts[0] });
// return res;
//     // const res = await instance.methods.plus(num1, num2)
//     // .call({from: accounts[0] });

// }
// async function subNumbers(account, contractInstance,num1, num2){
//     const {instance, accounts} = await createInstance();
//       const res = await instance.methods.plus(num1, num2)
//     .send({from: accounts[0] });

//     // const res = await instance.methods.minus(num1, num2)
//     // .call({from: accounts[0] });
//     return res;
// }




// export {createInstance,addNumbers,subNumbers};
