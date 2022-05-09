import React, { useContext } from 'react';
import { GOTContext } from "../../Contexts/Context";
import './Pagination.scss';

const Pagination = () => {
    const {page, setPage, characters} = useContext(GOTContext);
    
    const maxPage = characters.length;
    
    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <button className="pagination-previous" rel='prev' disabled={page === 1} onClick={() => setPage(page-1) }>Previous</button>
            <button className="pagination-next" rel='next' disabled={page === maxPage} onClick={() => setPage(page+1)}>Next page</button>
            <ul className="pagination-list">
                <li>
                    <button className={page === 1 ? "pagination-link is-current" : "pagination-link"} aria-label="Goto page 1" onClick={() => setPage(1)}>1</button>
                </li>
                {
                    page > 2 ?
                    <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    : ''
                }
                {
                    page !== 1 ?
                    <li>
                        <button className="pagination-link is-current" aria-label={"Page " + (page)} aria-current="page">{page}</button>
                    </li>
                    : ''
                }
                
                {
                    page !== maxPage ?
                    <li>
                        <button className="pagination-link" aria-label={"Goto page "+ (page+1)} onClick={() => setPage(page+1)}>{page+1}</button>
                    </li>
                    : ''
                }
                                
            </ul>
        </nav>
    )
}

export default Pagination