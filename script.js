 //import { ethers } from ethers;
// // Now you can use ethers.js directly
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
import { ethers } from 'https://cdn.jsdelivr.net/npm/ethers/dist/ethers.esm.js';



// const wallet = ethers.Wallet.createRandom();

// const public_key = wallet.address();
// const priv_key = wallet.priv_key();

// document.getElementById("myButton").addEventListener("click", generatekeypair)

// function generatekeypair(){
//     console.log("public address =" + public_key);
//     console.log("private key = " + priv_key);

//}

let mnemonic;
let wallets = [];

// Function to generate a mnemonic phrase
function generateMnemonic() {
    console.log("button is clicked");
    mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    document.getElementById("mnemonicDisplay").textContent = mnemonic;
    document.getElementById("addWallet").disabled = false;
    console.log("lalal "+ mnemonic);

    
}

// Function to add a wallet and display the public key
function addWallet() {
    // Use the mnemonic to create a wallet
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${wallets.length}`);
    wallets.push(wallet);

    // Create a new list item to display the wallet's public key
    const li = document.createElement("li");
    li.textContent = `Wallet ${wallets.length}: ${wallet.address}`;
    document.getElementById("walletList").appendChild(li);
}

// Event listeners for buttons
document.getElementById("generateMnemonic").addEventListener("click", generateMnemonic);
document.getElementById("addWallet").addEventListener("click", addWallet);

