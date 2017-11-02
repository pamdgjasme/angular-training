import { Component, OnInit } from '@angular/core';

// Services
import { BackendService } from '../services';
import { PaginationService } from '../services';
import { SearchService } from '../services';

@Component({
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
  providers: [
    BackendService,
    PaginationService,
    SearchService
  ]
})

export class ThingsComponent implements OnInit {

  things: ThingsInterface;
  loadedItems: ThingsInterface;

  editMode: boolean;
  searchMode: boolean;
  name: string;
  keyword: string;
  header: any;
  user_id: any;

  // default values
  editModeIndices;
  page  = 1;
  limit = 10;
  total = 0;


  constructor(
    private backendClient: BackendService,
    private pagination: PaginationService,
    private search: SearchService
  ) {
    this.editModeIndices = [];
    }

  addThing() {
    const callBack = () => {
      var n = this.pagination.totalPages[this.pagination.totalPages.length - 1];
      this.loadItems(n);
      this.name = '';
    };
    const thingToAdd = { thing: { name: this.name }};
    this.backendClient.addThing(thingToAdd, callBack);
  }

  onDelete(thing) {
    this.backendClient.deleteThing(thing.id, () => this.loadItems());
  }

  onSave(thing, index) {
    const thingToUpdate = {
      thing: {
        name: thing.name,
        id: thing.id
      }
    }

    const callBack = () => {
      this.toggleEditMode(thing.id);
    };
    this.backendClient.saveThing(thingToUpdate, callBack);
  }

  toggleEditMode(thingId) {
    var index = this.editModeIndices.indexOf(thingId);
    if (this.editModeIndices.includes(thingId)) {
      this.editModeIndices.splice(index, 1);
      this.editMode = !this.editMode;
    } else {
      this.editModeIndices.push(thingId);
      this.editMode = true;
    }
  }

  loadItems(n = 1) {
    const callBack = (data) => {
      this.keyword = '';
      this.searchMode = false;
      this.things = data;
      this.loadedItems = data;
      this.pagination.setPagination(this.things, n);
    }
    this.backendClient.getThings(callBack);
  }

  ngOnInit() {
    this.loadItems();
  }

  searchThing(keyword) {
    this.things = this.search.searchByKeyword(this.loadedItems, keyword);
    this.pagination.setPagination(this.things);
    this.searchMode = true;
  }

  searchPagination(n) {
    this.pagination.setPagination(this.things, n);
  }
}
