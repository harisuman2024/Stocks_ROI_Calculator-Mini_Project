function calculateROI() {
    const totalInvestment = parseFloat(document.getElementById('totalInvestment').value);
    const profit = parseFloat(document.getElementById('profit').value);

    if (isNaN(totalInvestment) || isNaN(profit)) {
        document.getElementById('roiResult').textContent = 'Please enter valid numbers.';
    } else {
        const roi = (profit / totalInvestment) * 100;
        document.getElementById('roiResult').textContent = `ROI: ${roi.toFixed(2)}%`;
    }
}
