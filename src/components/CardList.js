import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
    const cardArray = robots.map((user,i)=> {
        return <Card key ={i} id = {robots[i].id} name ={robots[i].name} email={robots[i].email} />
    });
    return(
        <div>
            {cardArray}
            {/* <Card id = {robots[1].id} name ={robots[1].name} email={robots[1].email} />
            <Card id = {robots[2].id} name ={robots[2].name} email={robots[2].email} />
            <Card id = {robots[3].id} name ={robots[3].name} email={robots[3].email} />
            <Card id = {robots[4].id} name ={robots[4].name} email={robots[4].email} /> */}
        </div>
    );    
}

export default CardList;