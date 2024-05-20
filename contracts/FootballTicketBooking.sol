//SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract FootballTicketBooking {
    address public admin;

    struct Match {
        uint256 matchId;
        string teamA;
        string teamB;
        uint256 ticketPrice;
        uint256 ticketCapacity;
        uint256 ticketsSold;
        bool isOpenForBooking;
    }

    mapping(uint256 => Match) public matches;
    uint256 public nextMatchId;

    struct User {
        string firstName;
        string lastName;
        uint256 idNumber;
        string email;
        string password;
        address walletAddress;
        mapping(uint256 => uint256[]) tickets; // matchId => ticketIds
    }

    mapping(address => User) public users;

    event MatchAdded(uint256 matchId, string teamA, string teamB, uint256 ticketPrice, uint256 ticketCapacity);
    event TicketBooked(address user, uint256 matchId, uint256 ticketId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    

    function addMatch(string memory _teamA, string memory _teamB, uint256 _ticketPrice, uint256 _ticketCapacity) public onlyAdmin {
        uint256 matchId = nextMatchId++;
        matches[matchId] = Match(matchId, _teamA, _teamB, _ticketPrice, _ticketCapacity, 0, true);
        emit MatchAdded(matchId, _teamA, _teamB, _ticketPrice, _ticketCapacity);
    }

    constructor() {
    admin = msg.sender;
    nextMatchId = 1; // Initialize nextMatchId to 1
}

    function register(string memory _firstName, string memory _lastName, uint256 _idNumber, string memory _email, string memory _password) public {
    require(users[msg.sender].walletAddress == address(0), "User already registered"); // Check if user is not already registered

        // Create a new User struct
        User storage newUser = users[msg.sender];
        newUser.firstName = _firstName;
        newUser.lastName = _lastName;
        newUser.idNumber = _idNumber;
        newUser.email = _email;
        newUser.password = _password;
        newUser.walletAddress = msg.sender;
        
        // Initialize the mapping
        for (uint256 i = 0; i < nextMatchId; i++) {
            newUser.tickets ;
        }
    }

    function bookTicket(uint256 _matchId) public payable {
        Match storage matchInfo = matches[_matchId];
        require(matchInfo.isOpenForBooking, "Match not open for booking");
        require(matchInfo.ticketsSold < matchInfo.ticketCapacity, "No more tickets available");
        require(msg.value == matchInfo.ticketPrice, "Incorrect payment amount");

        User storage user = users[msg.sender];
        user.tickets[_matchId].push(matchInfo.ticketsSold + 1);
        matchInfo.ticketsSold++;

        emit TicketBooked(msg.sender, _matchId, user.tickets[_matchId][user.tickets[_matchId].length - 1]);
    }

    function closeBooking(uint256 _matchId) public onlyAdmin {
        matches[_matchId].isOpenForBooking = false;
    }
}