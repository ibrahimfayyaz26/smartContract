pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FtpSell {
    string public name = "Buy Ftp from ether";
  IERC20 public token;
  uint public rate = 3600;
  


    event TokensSold(
        address account,
        address token,
        uint amount,
        uint rate
    );

  constructor(IERC20 _token)public{
      token = _token;
  }


    function buyTokens() public payable {

        uint256 FtpAmount = msg.value * rate;

        token.approve(address(this), FtpAmount);

        require(token.balanceOf(address(this)) >= FtpAmount);

        token.transferFrom(address(this), msg.sender, FtpAmount);

        emit TokensSold(msg.sender, address(token), FtpAmount, rate);
    }
}