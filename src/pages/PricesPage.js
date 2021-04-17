import React from 'react';
import Table from 'react-bootstrap/Table';

const prices = [
    {person: "adults", price1: "100", price2: "130"},
    {person: "students, pensioners", price1: "60", price2: "90"},
    {person: "children under 10 years", price1: "40", price2: "60"}
]

const day1 = "Monday - Fridays"
const day2 = "Weekends"

const tableHeader = prices.map(price =>(
    <th>{price.person}</th>
))

const tablePrice1 = prices.map(price =>(
    <td>{price.price1}</td>
))

const tablePrice2 = prices.map(price =>(
    <td>{price.price2}</td>
))

const PricesPage = () => {
    return (
        <Table striped bordered responsive="md">
            <thead>
                <tr>
                    <th></th>
                    {tableHeader}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{day1}</td>
                    {tablePrice1}
                </tr>    
                <tr>
                    <td>{day2}</td>
                    {tablePrice2}
                </tr>            
            </tbody>
        </ Table>
    );
}

export default PricesPage;