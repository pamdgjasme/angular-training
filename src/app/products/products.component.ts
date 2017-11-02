import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  products = [
    {
      id: 1,
      name: 'Apple',
      description: 'Fuji',
      price: 100
    },
    {
      id: 2,
      name: 'Orange',
      description: 'Fruit',
      price: 50
    },
  ]

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { this.createForm(); }

  createForm() {
    this.productForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [
        Validators.required,
        Validators.pattern("^$|^[0-9]+")]
      ]
    })
  }

  public ngOnInit() {
    // //check if has token
    // console.log(sessionStorage.getItem('token'));
    // if (sessionStorage.getItem('token') == null) {
    //   this.router.navigate(['home']);
    // }
  }

  clearForm() {
    this.product.id = 0;
    this.product.name = '';
    this.product.description = '';
    this.product.price = 0;
    this.productForm.markAsUntouched();
  }

  addProduct(data) {
    if (data.id == 0 || data.id == null || typeof this.products[data.id - 1] == 'undefined') {
      data.id = (this.products.length) + 1;
      this.products.push(data);
      this.productForm.reset();
    } else {
      this.products[data.id - 1].name = data.name;
      this.products[data.id - 1].description = data.description;
      this.products[data.id - 1].price = data.price;
    }
    this.clearForm();
  }

  editProduct(product) {
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.description = product.description;
    this.product.price = product.price;
  }

  deleteProduct(product) {
    var index;
    this.products.forEach(function (value, key) {
      if (value.id == product.id) {
         index = key;
      }
    });
    this.products.splice(index, 1);
    this.productForm.value.id = 0;
    this.clearForm();
  }
}
