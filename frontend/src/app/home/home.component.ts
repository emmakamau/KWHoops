import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserAuthenticationService]
})
export class HomeComponent implements OnInit {
  constructor(private service: UserAuthenticationService, private router: Router) { }

  handler: any = null;
  ngOnInit() {
    this.loadStripe();
  }

  loggedIn(){
    localStorage.getItem('token')
  }

  payFreeTrial(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        userSubscribe(token)
      }
    });

    const userSubscribe = (token: any) => {
      let useremail = token.email
      let SubscriptionToken = token.id
      let SubscriptionName = "7 Day Trial"
      let data = { "user_email": useremail, "sub_plan_name": SubscriptionName, "sub_payment_token": SubscriptionToken }
      this.service.userSubscription(data).subscribe(response => {
        console.log(response)
        this.service.showSuccessBar('Subscription Successful', '')
        this.router.navigate(['training'])
      })
    }

    if(localStorage.getItem('sub_token')){
      this.service.showFailureBar('User already subscribed', 'OK')
    }else if(localStorage.getItem('token')){
      handler.open({
        name:'KWHoops',
        description:'Free Subscription',
        amount: amount*100
      })
    }else{
      this.service.showFailureBar('Login required', 'OK')
    }
  }

  payMonthlyTrial(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        userSubscribe(token)
      }
    });

    const userSubscribe = (token: any) => {
      let useremail = token.email
      let SubscriptionToken = token.id
      let SubscriptionName = "Monthly Subscription"
      let data = { "user_email": useremail, "sub_plan_name": SubscriptionName, "sub_payment_token": SubscriptionToken }
      this.service.userSubscription(data).subscribe(response => {
        console.log(response)
        this.service.showSuccessBar('Subscription Successful', '')
        this.router.navigate(['training'])
      }),
        this.service.showFailureBar('User subscription active', 'OK')
    }

    handler.open({
      name: 'KWHoops',
      description: 'Monthly Subscription',
      amount: amount * 100
    });

  }

  payAnnualTrial(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        userSubscribe(token)
      }
    });

    const userSubscribe = (token: any) => {
      let useremail = token.email
      let SubscriptionToken = token.id
      let SubscriptionName = "Annual Subscription"
      let data = { "user_email": useremail, "sub_plan_name": SubscriptionName, "sub_payment_token": SubscriptionToken }
      this.service.userSubscription(data).subscribe(response => {
        this.service.showSuccessBar('Subscription Successful', '')
        this.router.navigate(['training'])
      }),
        this.service.showFailureBar('User subscription active', 'OK')
    }

    handler.open({
      name: 'KWHoops',
      description: 'Annual Subscription',
      amount: amount * 100
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LKm1CGv6dMJUVkRO8K7ONZZnyale2qB5CyxTKCUHo2lvUMqzmbDOvg2ZhYiM8cOtCVryLkGSWozyDR19iNrLHs700EVEotck4',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}

