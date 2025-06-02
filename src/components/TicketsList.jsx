import Ticket from "./Ticket.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { getTickets} from "../store/ticketsSlice.js";
import {useEffect} from "react";
import asideFilters from "../store/asideSlice.js";
import tabs from "../store/tabSlice.js";
import btn  from "../store/butonSlice.js";

const TicketsList = () => {

    const dispatch = useDispatch()
    const { ticketsData } = useSelector((state) => state.tickets);
    const filtersTr = useSelector(state => state.asideFilters);
    const tabs = useSelector(state => state.tabs);
    const count = useSelector(state => state.btn)
    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch, filtersTr, tabs,  count]);


    return (
        <ul>
            {ticketsData.map((item, index) => {
                    return  <li key={index}>
                                <Ticket ticket={item}/>
                            </li>})}
        </ul>)};

export default TicketsList;

