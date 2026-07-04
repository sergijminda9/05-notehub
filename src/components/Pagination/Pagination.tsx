import ReactPaginateImport from 'react-paginate';
import css from './Pagination.module.css';

// react-paginate's UMD build confuses Vite's dependency pre-bundler
// (esbuild doesn't detect its nested __esModule flag), so the default
// import sometimes resolves to the whole module object instead of the
// component itself. This line safely unwraps it either way.
const ReactPaginate =
  (ReactPaginateImport as unknown as { default?: typeof ReactPaginateImport })
    .default ?? ReactPaginateImport;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (selectedItem: { selected: number }): void => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel="←"
      nextLabel="→"
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      pageClassName={css.pageItem}
      previousClassName={css.pageItem}
      nextClassName={css.pageItem}
      disabledClassName={css.disabled}
      renderOnZeroPageCount={null}
    />
  );
}
