import Pagination from 'react-bootstrap/Pagination';
import {useEffect, useRef, useState} from 'react';
type propsPaginationBar={
    activePage:number;
    setActivePage:(page:number)=>void;
    pageSize:number;
    itemsCount:number;
}
const calculatePageCount=(itemsCount:number,pageSize:number)=>{
    return Math.ceil(itemsCount / pageSize);

}
const PaginationBar = ({activePage, setActivePage, pageSize,itemsCount}:propsPaginationBar) => {
    const firstUpdate=useRef(true);
    const [pageCount,setPageCount]=useState(calculatePageCount(itemsCount,pageSize))
useEffect(()=>{
    setPageCount(Math.ceil(itemsCount / 4));
},[itemsCount])

    useEffect(()=>{
        if(!firstUpdate.current)
        setActivePage(1);
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
    },[pageCount])

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


    return (
        <div>
            {pageCount>1&&  <Pagination>{items}</Pagination>}


        </div>
    );
};

export default PaginationBar;
