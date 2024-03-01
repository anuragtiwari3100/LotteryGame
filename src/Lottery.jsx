import { useState } from "react";
import "./Lottery.css";
import {genTicket,sum} from "./Healper";
function Lottery(){
    let[ticket,setTicket]=useState(genTicket(3))

    let isWinning=sum(ticket) ===15;
    let buyTicket =() =>{
        setTicket(genTicket(3)); 
    }
    return (
        <div>
            <h1>Lottery game</h1>
            <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            <span>{ticket[3]}</span>
            </div>
            <br/>
            <button onClick={buyTicket}>Buy new Ticket</button> 
            <h3>{isWinning && "Congratulations,You won! "}</h3>
        </div>
    );
}
export default Lottery;