import { PaymentProvider } from "../core/PaymentProvider";
import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
    private hardcodedTransactionIdID = "4g7rfa";
    private PaymentProvider: PaymentProvider;

    constructor(private factory: PaymentProviderFactory) {
        this.PaymentProvider = factory.createPaymentProvider();
    }

    public processPayment(amount: number): void {
        this.PaymentProvider.authorize(amount);
        this.PaymentProvider.capture(this.hardcodedTransactionIdID);
        this.PaymentProvider.refund(this.hardcodedTransactionIdID);
    }
}
