import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DefaultEventTickets } from "../typechain";

describe("DefaultEventTickets Contract", function () {
    let DefaultEventTickets;
    let defaultEventTickets: DefaultEventTickets;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        DefaultEventTickets = await ethers.getContractFactory("DefaultEventTickets");
        [owner, addr1, addr2,addr3, ...addrs] = await ethers.getSigners();
        defaultEventTickets = (await DefaultEventTickets.deploy('curso','curso.com',10,1)) as DefaultEventTickets;
    });

    it('should be deployed', () => {
        expect(defaultEventTickets).to.be.not.null;
    })

    it('should set right owner', async () =>{
        expect(await defaultEventTickets.owner()).to.equal(owner.address);
    })

    it('should buy a ticket', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(2, {value:2});
        expect(await defaultEventTickets.getBuyerTicketCount(addr1.address)).to.equal(2);
    })

    it('should not buy a ticket if the amount is not enough', async () => {
        await expect(defaultEventTickets.connect(addr1).buyTickets(2, {value: 1})).to.be.revertedWith("Funds not enough to buy the tickets")
    })

    it('should not buy a ticket if there is not tickets to buy', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(8, {value:8});
        await expect(defaultEventTickets.connect(addr2).buyTickets(4, {value: 4})).to.be.revertedWith("Total tickets less than quantity")    
    })
    
    it('should return excess of amount when buy tickets', async () => {
        const beforeBalance = await addr3.getBalance();
        const ticketPrice = 1
        const amountToSend = 8
        const quantityToBuy = 5
        await defaultEventTickets.connect(addr3).buyTickets(quantityToBuy, {value:amountToSend});
        expect(beforeBalance.sub(ticketPrice * quantityToBuy)).to.equal(beforeBalance.sub(amountToSend).add(amountToSend - (ticketPrice * quantityToBuy)));
    })

    it('should not refund a ticket if the buyer has not ticket', async () => {
        await expect(defaultEventTickets.connect(addr2).getRefund(2)).to.be.revertedWith("Not tickets")
    })

    it('should not buy a ticket if the event is closed', async () => {
        await defaultEventTickets.connect(owner).endSale();
        await expect(defaultEventTickets.connect(addr1).buyTickets(2)).to.be.revertedWith("Event closed")
    })

    it('should not close the event if is not the owner', async () => {
        await expect(defaultEventTickets.connect(addr1).endSale()).to.be.revertedWith("Ownable: caller is not the owner")
    })
    
    it('should not refund if ticketQuantity is zero or less', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(8, {value:8});
        await expect(defaultEventTickets.connect(addr1).getRefund(0)).to.be.revertedWith("Tickets quantity must be greater than 0")    
    })
    
});