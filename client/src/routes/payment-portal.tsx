import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/payment-portal')({
    component: PaymentPortal,
})

export default function PaymentPortal() {
    return (
        <>
            <h1>Payment Portal</h1></>
    )
}

