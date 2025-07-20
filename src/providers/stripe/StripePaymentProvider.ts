import { PaymentProvider } from "../../core/PaymentProvider";

export default class StripePaymentProvider implements PaymentProvider {
    private name = "Stripe";

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
