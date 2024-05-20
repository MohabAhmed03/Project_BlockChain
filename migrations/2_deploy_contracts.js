var FootballTicketBooking = artifacts.require("FootballTicketBooking");

module.exports = function (deployer) {
    deployer.deploy(FootballTicketBooking);
};