import React from 'react'
import ReactPaginate from 'react-paginate'
import '../sass/pagigation.scss'
function Pagigation({handlePageClick,pageCount}) {
  return (
    <ReactPaginate
      nextLabel={<i class="fa-solid fa-caret-right"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<i class="fa-solid fa-caret-left"></i>}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />              
  )
}

export default Pagigation