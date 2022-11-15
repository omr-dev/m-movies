import {SortColumn} from './Movies';

type PropsMoviesTableHeader={
    handleSort:(newSortColumn:SortColumn)=>void;
    getSortIcon:(colName:SortColumn)=>null|JSX.Element;
}
const MoviesTableHeader = ({handleSort,getSortIcon}:PropsMoviesTableHeader) => {
    const titles=[
        SortColumn.title,SortColumn.genre,SortColumn.stock,SortColumn.rate];

    return (
        <thead>
        <tr>
            {titles.map((title,index)=>{
                return             <th key={index} onClick={()=>handleSort(title)}>{title.toUpperCase()}{getSortIcon(title)}</th>

            })}

            <th></th>
        </tr>
        </thead>
    );
};

export default MoviesTableHeader;
