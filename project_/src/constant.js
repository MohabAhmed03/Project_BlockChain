const contractAddress = "0xB52ba581479868FCD2392750566E10151032E629";
const contractAbi = [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "matchId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "teamA",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "teamB",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "ticketPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "ticketCapacity",
              "type": "uint256"
            }
          ],
          "name": "MatchAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "matchId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            }
          ],
          "name": "TicketBooked",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "admin",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "matches",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "matchId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "teamA",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "teamB",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "ticketPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ticketCapacity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ticketsSold",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isOpenForBooking",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "nextMatchId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "users",
          "outputs": [
            {
              "internalType": "string",
              "name": "firstName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lastName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "idNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_teamA",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_teamB",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_ticketPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_ticketCapacity",
              "type": "uint256"
            }
          ],
          "name": "addMatch",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_firstName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_lastName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_idNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_password",
              "type": "string"
            }
          ],
          "name": "register",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_matchId",
              "type": "uint256"
            }
          ],
          "name": "bookTicket",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_matchId",
              "type": "uint256"
            }
          ],
          "name": "closeBooking",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];
export { contractAbi, contractAddress }