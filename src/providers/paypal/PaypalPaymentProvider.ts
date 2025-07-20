import { PaymentProvider } from "../../core/PaymentProvider";

export default class PaypalPaymentProvider implements PaymentProvider {
    private name = "Paypal";

    authorize(amount: number): void {
        console.log(`[${this.name}] Authorizing $${amount}`);
    }

    capture(transactionId: string): void {
        console.log(`[${this.name}] Capturing transaction ${transactionId}`);
    }

    refund(transactionId: string): void {
        console.log(`[${this.name}] Refunding transaction ${transactionId}`);
    }
}
