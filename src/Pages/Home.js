import React from 'react';
import Users from '../components/Users';
import { useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [showButton, setshowButton] = useState(false)
    const searchName = async (text) => {
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
        setUsers(res.data.items);
        setshowButton(!showButton);
    }
    const clearGrid = () => {
        setUsers([])
    }
    return (
        <>
            <Search searchName={searchName} showButton={showButton} clearGrid={clearGrid} />
            <Users users={users} />
        </>
    )

}
export default Home;