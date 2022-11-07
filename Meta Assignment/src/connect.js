import abi from "./abi/abi.json" assert {type: "json"};

const connect = new Promise((res, rej) => {
    if(typeof window.ethereum == "undefined") {
        rej("Install Metamask");
    }
    window.ethereum.request({method: "eth_requestAccounts"});
    
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi,"0x8aC3239EEE73F68Fe0FA4AA5F948bf688cB6FF23");

    console.log(contract);
    web3.eth.getAccounts().then((accounts) => {
        contract.methods
        .getBuildings()
        .call({ from: accounts[0] })
        .then((supply) => {
            contract.methods
            .getBuildings()
            .call({ from: accounts[0] })
            .then((data) => {
                res({ supply: supply, buildings: data });
                
            });
        });

    });

});

export default connect;