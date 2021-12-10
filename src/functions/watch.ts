import web3 from "../providers/web3";
import Router from "./router";


async function watch() {
    const UniswapV2Router02 = new Router('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
    const output = await UniswapV2Router02.priceOf(
        '0x514910771af9ca656af840dff83e8264ecf986ca',
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    )
    console.log(`${web3.utils.fromWei(output[0])} LINK = ${web3.utils.fromWei(output[1])} ETH`);
}
export default watch;