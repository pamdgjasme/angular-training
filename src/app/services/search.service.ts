export class SearchService {
  data: any;

  searchByKeyword(obj, keyword) {
    this.data = obj;
    let tmp_arr = [];
    var a = 'a new apple';
    for (let i in this.data) {
      var name = this.data[i].name.toLowerCase();
      if (name.includes(keyword.toLowerCase())) {
        tmp_arr.push(this.data[i]);
      }
    }
    return tmp_arr;
  }
}
