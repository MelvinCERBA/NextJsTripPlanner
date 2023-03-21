export function formatCurrency(price) {
    return price.toLocaleString('fr-FR', { 
		style: 'currency', 
		currency: 'EUR' 
	});
}