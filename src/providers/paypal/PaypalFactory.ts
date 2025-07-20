import { PaymentProvider } from "../../core/PaymentProvider";
import { PaymentProviderFactory } from "../../core/PaymentProviderFactory";
import PaypalPaymentProvider from "./PaypalPaymentProvider";

export default class AppleFactory implements PaymentProviderFactory {
    createPaymentProvider(): PaymentProvider {
        return new PaypalPaymentProvider();
    }
}
