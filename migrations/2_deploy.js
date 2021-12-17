const FtpSell = artifacts.require("FtpSell");

module.exports = async function (deployer) {
  await deployer.deploy(FtpSell, "0x6B71cDc52B6B5e007E9e018D65B233AbeD8589C7");
  
};