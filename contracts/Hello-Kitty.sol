// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.4;

contract HelloKitty {
    event UpdatedMessages(string oldStr, string newStr);

    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function setMessage(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
