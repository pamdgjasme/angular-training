export class PaginationService {

  start = 1;
  end = 0;

  itemsPerPage = 10;
  startIndex;
  endIndex;

  totalItems;
  totalPages;


  setPagination(obj, currentPage: number = 1) {
    //get totalItems
    this.getObjSize(obj);
    this.getPages(this.totalItems);

    //calculate total pages
    let totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    // WIP for First and Last page buttons
    // if (totalPages <= this.itemsPerPage) {
    //   this.start = 1;
    //   this.end = totalPages;
    // } else {
    //
    //   if (currentPage <= 6) {
    //     this.start = 1;
    //     this.end = 10;
    //   } else if (currentPage + 4 >= totalPages) {
    //     this.start = totalPages - 9;
    //     this.end = totalPages;
    //   } else {
    //     this.start = currentPage - 5;
    //     this.end = currentPage + 4;
    //   }
    // }

    this.startIndex = (currentPage - 1) * this.itemsPerPage;
    this.endIndex = Math.min(this.startIndex + this.itemsPerPage - 1, obj.length - 1);
  }

  getObjSize(obj) {
    this.totalItems = obj.length;
  }

  getPages(objLength) {
    let pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    this.totalPages = Array(pageCount).fill(1).map((x, i) => i + 1);
  }
}
