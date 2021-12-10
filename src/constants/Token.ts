class Token {
    name: string;
    decimals: number;
    symbol: string;
    address: string;
    constructor(_name: string, _decimals: number, _symbol: string, _address: string) {
        this.name = _name;
        this.decimals = _decimals;
        this.symbol = _symbol;
        this.address = _address;
    }   
}
export default Token;