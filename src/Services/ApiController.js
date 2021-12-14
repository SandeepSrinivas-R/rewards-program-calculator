export const apiUrl = {
    getAllTransactions:'/all',
    addNewTransaction:'/add'
}

export async function getApiCall(url) {
    try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
    } catch (err) {
        return { error: { message: "some error occured." }, code: -1 };
    }
}

export async function postApiCall(url, data) {
    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await request.json();
        return response;
    } catch (err) {
        return { error: { message: "some error occured." }, code: -1 };
    }
}