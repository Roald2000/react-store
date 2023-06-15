

export async function FetchItems() {
    try {
        let data = fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: { 'Cache': 'store' }
        });
        data = await (await data).json();
        data = data.sort((a, b) => a.category.localeCompare(b.category));
        return data;
    } catch (error) {
        console.error(error);
    }
}