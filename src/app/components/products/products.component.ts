import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Modal } from 'bootstrap';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ProductsComponent implements OnInit {
  // @ViewChild('exampleModal', { static: false }) modalElement: ElementRef;
  productForm: FormGroup;
  products: any = [];
  isEdit: boolean = false;
  productId: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.initializeProductForm();
    this.getProducts();
  }

  initializeProductForm() {
    this.productForm = this.fb.group({
      pName: ['', Validators.required],
      price: ['', Validators.required],
      pColor: ['', Validators.required],
    });
  }

  getProducts() {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSave() {
    let form = this.productForm.value;
    let obj = {
      name: form.pName,
      price: form.price,
      color: form.pColor,
      id: this.isEdit ? this.productId : null,
    };
    if (this.isEdit) {
      this.apiService.updateProduct(obj, this.productId).subscribe(
        (res) => {
          alert(`Product updated successfully.`);
          this.productForm.reset();
          this.getProducts();
          this.isEdit = false;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.apiService.createProduct(obj).subscribe(
        (res) => {
          alert(`Product added successfully.`);
          this.productForm.reset();
          this.getProducts();
          // const modal =
          //   Modal.getInstance(this.modalElement.nativeElement) ||
          //   new Modal(this.modalElement.nativeElement);
          // modal.hide();

          // setTimeout(() => {
          //   const backdrop = document.querySelector('.modal-backdrop');
          //   if (backdrop) {
          //     backdrop.remove();
          //     document.body.classList.remove('modal-open');
          //   }
          // }, 3000);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  deleteProd(product) {
    this.apiService.deleteProduct(product.id).subscribe(
      (res) => {
        alert('Product Deleted Successfully!');
        this.getProducts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editProd(product) {
    this.isEdit = true;
    this.productId = product.id;
    this.productForm.patchValue({
      pName: product.name,
      price: product.price,
      pColor: product.color,
    });
  }

  openAddProduct() {
    this.isEdit = false;
    this.productForm.reset();
  }

  addItem(item) {
    this.testService.addItem(item);
  }
}
