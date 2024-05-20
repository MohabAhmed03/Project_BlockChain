const FootballTicketBooking = artifacts.require("FootballTicketBooking");

contract("FootballTicketBooking", (accounts) => {
    let contractInstance;
    const admin = accounts[0];
    const user = accounts[1];
    
    before(async () => {
        contractInstance = await FootballTicketBooking.deployed();
    });

    it("should allow admin to add a match", async () => {
        const teamA = "Team A";
        const teamB = "Team B";
        const ticketPrice = web3.utils.toWei("0.1", "ether");
        const ticketCapacity = 100;

        await contractInstance.addMatch(teamA, teamB, ticketPrice, ticketCapacity, { from: admin });

        const match = await contractInstance.matches(1);
        assert.equal(match.teamA, teamA, "Team A should be Team A");
        assert.equal(match.teamB, teamB, "Team B should be Team B");
        assert.equal(match.ticketPrice, ticketPrice, "Ticket price should be 0.1 ether");
        assert.equal(match.ticketCapacity, ticketCapacity, "Ticket capacity should be 100");
        assert.equal(match.ticketsSold, 0, "Tickets sold should be 0");
        assert.equal(match.isOpenForBooking, true, "Match should be open for booking");
    });

    it("should allow a user to register", async () => {
        const firstName = "John";
        const lastName = "Doe";
        const idNumber = 123456789;
        const email = "john.doe@example.com";
        const password = "password123";

        await contractInstance.register(firstName, lastName, idNumber, email, password, { from: user });

        const registeredUser = await contractInstance.users(user);
        assert.equal(registeredUser.firstName, firstName, "First name should be John");
        assert.equal(registeredUser.lastName, lastName, "Last name should be Doe");
        assert.equal(registeredUser.idNumber, idNumber, "ID number should be 123456789");
        assert.equal(registeredUser.email, email, "Email should be john.doe@example.com");
    });
    it("should allow admin to close booking", async () => {
        const matchId = 1;

        await contractInstance.closeBooking(matchId, { from: admin });

        const match = await contractInstance.matches(matchId);
        assert.equal(match.isOpenForBooking, false, "Match should be closed for booking");
    });

    it("should not allow non-admin to add a match", async () => {
        const teamA = "Team X";
        const teamB = "Team Y";
        const ticketPrice = web3.utils.toWei("0.2", "ether");
        const ticketCapacity = 200;

        try {
            await contractInstance.addMatch(teamA, teamB, ticketPrice, ticketCapacity, { from: user });
            assert.fail("Non-admin should not be able to add a match");
        } catch (error) {
            assert(error.message.includes("Only admin can perform this action"), "Expected only admin restriction");
        }
    });

   

    it("should not allow booking a ticket for a closed match", async () => {
        const matchId = 1;
        const ticketPrice = web3.utils.toWei("0.1", "ether");

        try {
            await contractInstance.bookTicket(matchId, { from: user, value: ticketPrice });
            assert.fail("Booking should fail for a closed match");
        } catch (error) {
            assert(error.message.includes("Match not open for booking"), "Expected match not open for booking restriction");
        }
    });
});