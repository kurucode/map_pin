export function upload() {
    return {
        type: "UPLOAD"
    };
}

export function loadExcel(payload) {
    // console.log(payload)
    return {
        type: "LOAD_EXCEL",
        payload
    }
}

export function addPoint(payload) {
    return {
        type: "ADD_MARKER",
        payload
    }
}