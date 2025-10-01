interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal`);
    }
}

class PaymentContext {
    constructor(private strategy: PaymentStrategy) { }

    execute(amount: number): void {
        this.strategy.pay(amount);
    }
}

export function runStrategyDemo() {
    const cc = new PaymentContext(new CreditCardPayment());
    cc.execute(100);

    const pp = new PaymentContext(new PayPalPayment());
    pp.execute(200);
}
