export function useExport() {
    const exportToCSV = (resultsData) => {
        if (!resultsData || resultsData.length === 0) return;

        const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

        const headers = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital'];
        const csvContent = [
            headers.join(','),
            ...resultsData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return [
                    yearData.year,
                    yearData.valueEndOfYear.toFixed(2),
                    yearData.interest.toFixed(2),
                    totalInterest.toFixed(2),
                    totalAmountInvested.toFixed(2)
                ].join(',');
            })
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `investment-results-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return { exportToCSV };
}
