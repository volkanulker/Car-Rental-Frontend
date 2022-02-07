import { CartService } from './../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from './../../models/creditCard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardetailService } from 'src/app/services/cardetail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentPrice: number;
  private carId: number;

  rentRange: number = 1;

  creditCard: CreditCard = {
    cardNumber: "",
    expireYear: "",
    expireMonth: "",
    cvc: "",
    cardHolderFullName: ""
  };

  cardHolder: string = "";
  cardNumber: string = "";
  expireDate: string = "";
  cvc: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private carDetailService: CardetailService,
    private paymentService: PaymentService,
    private cartService:CartService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.toastrService.toastrConfig.positionClass = 'toast-center-center';
    this.getRentRange();
    this.setCarId();
    this.setRentPrice(this.carId);
  }

  setRentPrice(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.rentPrice = response.data[0].dailyPrice * this.rentRange;
      //console.log("rentPrice:" + this.rentPrice + " rentRange:" + this.rentRange);
    });
  }

  getRentRange() {
    this.paymentService.getNumberOfDays().subscribe((response) => {
      this.rentRange = response;
      //console.log("response:" + response);
    });

  }

  setCarId() {
    this.activatedRoute.params.subscribe((params) => {
      this.carId = Number(params["carId"]);
    })
  }

  readCardValues() {
    let anyError = null;
    try {
      this.creditCard.cardHolderFullName = this.cardHolder;
      this.creditCard.cardNumber = this.cardNumber;
      this.creditCard.cvc = this.cvc;
      this.creditCard.expireMonth = this.expireDate.split("/")[0];
      this.creditCard.expireYear = this.expireDate.split("/")[1];
    } catch (error) {
      this.toastrService.error("Please check your expire date.", "Invalid  expire date.");
      return error;
    }

    return anyError;
  }




  navigateToSuccessfullPaymentPage() {
    this.router.navigateByUrl("/payment/successfull");
  }


  CreditCardValidation(): any {
    let errorMessage = null;

    let expireMonth = this.creditCard.expireMonth;
    let expireYear = this.creditCard.expireYear;
    let cardNumber = this.creditCard.cardNumber;
    let cvc = this.creditCard.cvc;
    let cardHolderName = this.creditCard.cardHolderFullName;

    if (cardNumber.length != 16) {
      errorMessage = "Credit card number is invalid";
      console.log(cardNumber.length);
    } else if (cvc.length != 3) {
      errorMessage = "Credit card cvc is invalid.";
      console.log("Credit card cvc is invalid.");
    } else if (cardHolderName.length == 0) {
      errorMessage = "Please enter card holder full name";
      console.log("Please enter card holder full name");
    } else if (expireMonth.length != 2 || +expireMonth > 12 || +expireMonth < 1) {
      errorMessage = "Invalid expire month";
      console.log("Invalid expire month");
    } else if (expireYear.length != 4) {
      errorMessage = "Invalid expire year.";
      console.log("Invalid expire year.");
    }
    return errorMessage;

  }

  navigateToHomePage() {
    this.router.navigateByUrl("#");
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async pay() {
    if (!this.readCardValues()) {
      let validationMessage = this.CreditCardValidation();

      if (!validationMessage) {
        if (this.paymentService.isPaymentInfoCorrect(this.creditCard)) {
          //this.toastrService.success("Redirecting to the home page.", "Payment is succesfull.");
          
          //this.navigateToHomePage();
          this.cartService.clearCart();

          this.navigateToSuccessfullPaymentPage();
        }
        else {
          this.toastrService.error("Please check your Credit Card info.", "Credit card is not valid");
          console.log("credit card is not valid");
        }

      } else {
        this.toastrService.error(validationMessage, "Credit card is not valid.");
      }

    }

  }

}
