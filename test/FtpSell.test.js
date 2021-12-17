const FtpSell = artifacts.require("FtpSell");
const Token = artifacts.require("Token");

require("chai").use(require("chai-as-promised")).should();

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("FtpSell", ([buyer, investor]) => {
  let ftpSell;
  before(async () => {
    ftpSell = await FtpSell.new("0x6B71cDc52B6B5e007E9e018D65B233AbeD8589C7");
    // await token.transfer(ftpSell.address, tokens("1000000"));
  });

  describe("Ftp deployment", async () => {
    it("contract has a name", async () => {
      const name = await ftpSell.name();
      assert.equal(name, "Buy Ftp from ether");
    });
  });

  describe("selling", async () => {
    it("selling token", async () => {
     ftpSell.buyTokens({
        from: investor,
        value: web3.utils.toWei("10", "ether"),
      });
    });
  });
});
