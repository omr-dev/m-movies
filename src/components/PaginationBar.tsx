import Pagination from 'react-bootstrap/Pagination';
import {useEffect, useRef, useState} from 'react';
type propsPaginationBar={
    activePage:number;
    setActivePage:(page:number)=>void;
    pageSize:number;
    itemsCount:number;
}

const PaginationBar = ({activePage, setActivePage, pageSize,itemsCount}:propsPaginationBar) => {
    const firstUpdate=useRef(true);
    const [pageCount,setPageCount]=useState(Math.ceil(itemsCount / pageSize))
useEffect(()=>{
    setPageCount(Math.ceil(itemsCount / 4));
},[itemsCount])

    useEffect(()=>{
        console.log("pageCount useEffect i calisti");
        if(!firstUpdate.current)
        setActivePage(activePage-1);
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
    },[pageCount])
    //////////////////////////

    // let active = 1;
    // const pageSize = 4;
    // const pageCount=Math.ceil(movies.length / pageSize);
    let items = [];
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => {
                setActivePage(number);
            }}>
                {number}
            </Pagination.Item>,
        );
    }

    // const paginationBasic = (
    //
    // );

    //render(paginationBasic);
    //////////////////////////////
    return (
        <div>
            {pageCount>1&&  <Pagination>{items}</Pagination>}


        </div>
    );
};

export default PaginationBar;
