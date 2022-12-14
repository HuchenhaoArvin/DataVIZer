const BASE_URL = "http://127.0.0.1:4000"

export const ApiService = {
    getLineGraph: async function () {
        try {
            const res = await fetch(BASE_URL + "/graph");
            return res.json()
        }
        catch (error) {
            console.log(error)
        }
    },
    postLineGraph: async function (linegraph) {
        const options = { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(linegraph) }
        try {
            const res = await fetch(BASE_URL + "/graph", options);
            return res.json()
        }
        catch (error) {
            console.log(error)
        }
    },
    getLineGraphById: async function (id) {

        try {
            const res = await fetch(`${BASE_URL}/graph/${id}`);
            return res.json()
        }
        catch (error) {
            console.log(error)
        }

    }
}