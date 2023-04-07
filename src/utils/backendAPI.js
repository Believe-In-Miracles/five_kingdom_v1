
const getHeaders = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    };
};

const extractBody = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return res.text().then((text) => {
            console.log('Error: ', text);
            let errMessage;
            try {
                let err = JSON.parse(text);
                errMessage = err.message;
            } catch (error) { }
            throw new Error(errMessage || text);
        });
    }
};

const extractBody1 = (res) => {
    return res;
    // if (res.ok) {
    //   return res;
    // } else {
    //   return res.text().then((text) => {
    //     console.log('Error: ', text);
    //     let errMessage;
    //     try {
    //       let err = JSON.parse(text);
    //       errMessage = err.message;
    //     } catch (error) { }
    //     throw new Error(errMessage || text);
    //   });
    // }
};

const BASE_BACKEND_URL = `http://localhost:8000`;

export const getTradeByAddress = (walletAddress) => {
    if (walletAddress != "") {
        let url = BASE_BACKEND_URL + `/api/trade/${walletAddress}`;
        // console.log(url);

        return fetch(url, {
            method: 'GET',
            ...getHeaders(),
        }).then((res) => {
            return extractBody1(res);
        });
    }
    return "";
};

export const getAllianceHistoryByAddress = (kingdomNumber) => {
    let url = BASE_BACKEND_URL + `/api/allianceHistory?kingdomNumber=${kingdomNumber}`;
    // console.log(url);

    return fetch(url, {
        method: 'GET',
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
}

export const createTrade = (data) => {
    let url = BASE_BACKEND_URL + `/api/trade`;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
};

export const createAllianceHistory = (data) => {
    let url = BASE_BACKEND_URL + `/api/allianceHistory`;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
};

export const getResourcesByAddress = (walletAddress) => {
    if (walletAddress != "" && walletAddress != null) {
        let url = BASE_BACKEND_URL + `/api/kingdom?walletAddress=${walletAddress}`;
        return fetch(url, {
            method: 'GET',
            ...getHeaders(),
        }).then((res) => {
            return extractBody1(res);
        });
    } else {
        let url = BASE_BACKEND_URL + `/api/kingdom`;
        return fetch(url, {
            method: 'GET',
            ...getHeaders(),
        }).then((res) => {
            return extractBody1(res);
        });
    }

    return "";
};

export const updateTradeStatus = (id, status) => {
    if (id != "") {
        let url = BASE_BACKEND_URL + `/api/trade/${id}`;
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify({ finished: status }),
            ...getHeaders(),
        }).then((res) => {
            return extractBody1(res);
        });
    } else {
        return "";
    }
};

export const getAllianceInfo = (kingdomNumber) => {
    let url = BASE_BACKEND_URL + `/api/alliance?kingdomNumber=${kingdomNumber}`;
    return fetch(url, {
        method: 'GET',
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
};

export const getUpcomingBattle = () => {
    let url = BASE_BACKEND_URL + `/api/attack`;
    return fetch(url, {
        method: 'GET',
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
}

export const tradeTool = (data) => {
    let url = BASE_BACKEND_URL + `/api/kingdom/trade`;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        ...getHeaders(),
    }).then((res) => {
        return extractBody1(res);
    });
};