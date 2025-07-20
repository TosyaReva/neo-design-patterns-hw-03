import { PaymentProvider } from "../../core/PaymentProvider";

export default class ApplePaymentProvider implements PaymentProvider {
    private name = "Apple";

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
