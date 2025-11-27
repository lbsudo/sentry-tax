import { createFileRoute } from '@tanstack/react-router'

import PaycheckCalculator from "@/components/financial-calculators/PaycheckCalculator.tsx";
import MortgageCalculator from "@/components/financial-calculators/MortgageCalculator.tsx";
import AutoCalculator from "@/components/financial-calculators/AutoCalculator.tsx";
import LoanCalculator from "@/components/financial-calculators/LoanCalculator.tsx";
import RetirementCalculator from "@/components/financial-calculators/RetirementCalculator.tsx";
import SavingsCalculator from "@/components/financial-calculators/SavingsCalculator.tsx";
import InvestmentsCalculator from "@/components/financial-calculators/InvestmentCalculator.tsx";

export const Route = createFileRoute('/resources/financial-calculators')({
    component: FinancialCalculators,
})

export default function FinancialCalculators() {
    return (
        <>
            <PaycheckCalculator />
            <MortgageCalculator />
            <AutoCalculator />
            <LoanCalculator />
            <RetirementCalculator />
            <SavingsCalculator />
            <InvestmentsCalculator />
        </>
    );
}
