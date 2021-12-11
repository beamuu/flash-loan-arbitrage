import axios from "axios";
import { webhookConfig } from "./webhook.config";

export interface IPayload {
    token0: string;
    token1: string;
    token0Address: string;
    token1Address: string;
    prices: {
        uniswap: number;
        sushiswap: number;
    }
    pathOfExecution: string[];
    loanTestInput: number[];
    test: number[];
}

export function webhookCall(payload: IPayload) {
    axios.post(webhookConfig.webhookEndpoint, payload ,{
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        
    })
}