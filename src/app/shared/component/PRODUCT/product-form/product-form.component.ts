import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/service/productService';
import { SanckbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  //  {
  //   productId: 3,
  //   productName: 'Headphones',
  //   productImage: 'https://imgs.search.brave.com/6hNbNNnY6ZEVO2z1urr-KgkoxlEmfDSgiPz9vA-CH2A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2Nzc4Mzg4/NDc4MDQtNDA1NDE0/M2ZiOTFhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE9YeDhh/R1ZoWkhCb2IyNWxj/M3hsYm53d2ZId3dm/SHg4TUE9PQ',
  //   productDescription: 'Wireless Bluetooth headphones',
  //   isAvailable: false,
  //   productPrice: 3000,
  //   warranty: '6 Months',

  //   reviews: [
  //     {
  //       customerName: 'Priya',
  //       rating: 4,
  //       comment: 'Sound quality is nice',
  //     },
  //   ],
  // },

  productForm!: FormGroup;
  isInEditMode: boolean = false;
  productId!: number;
  productObj!: Iproduct;
  constructor(
    private _productServicve: ProductService,
    private _snackbar: SanckbarService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.onCreateForm();
    this.onAddreviews();
    this.onPatchData();
  }

  onCreateForm() {
    this.productForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      productImage: new FormControl(null, [Validators.required]),
      productDescription: new FormControl(null, [Validators.required]),
      isAvailable: new FormControl(null, [Validators.required]),
      productPrice: new FormControl(null, [Validators.required]),
      warranty: new FormControl('1 Year', [Validators.required]),
      reviews: new FormArray([]),
    });
  }

  get reviewsArray() {
    return this.productForm.get('reviews') as FormArray;
  }
  get c() {
    return this.productForm.controls;
  }

  onAddreviews() {
    let reviewGroup = new FormGroup({
      customerName: new FormControl(null, [Validators.required]),
      rating: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required]),
    });
    this.reviewsArray.push(reviewGroup);
  }

  onAddProduct() {
    if (this.productForm.valid) {
      let NEW_OBJ: Iproduct = {
        ...this.productForm.value,
        productId: Date.now(),
      };
      this._productServicve.createNewProduct(NEW_OBJ).subscribe({
        next: (data) => {
          this._snackbar.openSnackBar(data.msg);
          this._router.navigate(['products']);
        },
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  onPatchData() {
    this.productId = +this._activatedRoute.snapshot.paramMap.get('productId')!;

    if (this.productId) {
      this.isInEditMode = true;
      this._productServicve.fetchProductById(this.productId).subscribe({
        next: (data) => {
          this.productObj = data;
          this.productForm.patchValue(this.productObj);
          this.reviewsArray.clear();
          this.productObj.reviews.forEach((r) => {
            let reviewGroup = new FormGroup({
              customerName: new FormControl(r.customerName, [
                Validators.required,
              ]),
              rating: new FormControl(r.rating, [Validators.required]),
              comment: new FormControl(r.comment, [Validators.required]),
            });
            this.reviewsArray.push(reviewGroup);
          });
        },
      });
    }
  }

  onUpdate() {
    if (this.productForm.valid) {
      let UPDATED_OBJ: Iproduct = {
        ...this.productForm.value,
        productId: this.productId,
      };
      this._productServicve.onUpdate(UPDATED_OBJ).subscribe({
        next: (data) => {
          this._snackbar.openSnackBar(data.msg);
          this._router.navigate(['products']);
        },
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  onRemoveReview(i : number){
    this.reviewsArray.removeAt(i)
  }
}
