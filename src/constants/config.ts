const config =  {
    UniswapV2RouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    SushiswapRouterAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
}

export const arbitrageConfig = {
    loan: 1, // in ETH
    loanTest: [1],
    // loanTest: [1,3,5,7,10,20,50,100],
    flashLoanFeePercent: 0.09,
    flashLoanFee: 0.09/100,
    swapFeePercent: 0.3,
    swapFee: 0.3/100,
}

export default config;