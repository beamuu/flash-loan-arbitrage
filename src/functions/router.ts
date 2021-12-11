import IUniswapV2Router02 from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";
import web3 from "../providers/web3";
import { AbiItem } from 'web3-utils';
import { Contract } from "web3-eth-contract";

class Router {
    public router: Contract | null = null;
    constructor(address: string) {
        this.router = new web3.eth.Contract(IUniswapV2Router02.abi as AbiItem[], address);
    }
    public async priceOf(token0: string, token1: string) {
        const calledData = await this.router.methods.getAmountsOut(
            web3.utils.toWei("1"),
            [
                token0,
                token1
            ]
        ).call();
        return calledData;
    }
    public async getAmountsOut(inputAmount: string | number, token0: string, token1: string) {
        const calledData = await this.router.methods.getAmountsOut(
            web3.utils.toWei(inputAmount.toString()),
            [
                token0,
                token1
            ]
        ).call();
        return calledData;
    }
}
export default Router;