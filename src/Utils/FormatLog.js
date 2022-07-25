const formatLog = (data) => {
    const formatedData = {};
    for (let i of data) {
        let time = i.time.split(" ");
        if (!formatedData[i.user_id]) {
            formatedData[i.user_id] = { date: {} };
        }
        let obj = formatedData[i.user_id];
        obj[i.type] = (obj[i.type] ? obj[i.type] : 0) + 1;  // sets the valid inpression count
        obj["revenue"] = (obj["revenue"] ? obj["revenue"] : 0) + i.revenue;  // sets the valid revanue
        if (i.type === "conversion") {
            obj.date[time[0]] = (obj.date[time[0]] ? obj.date[time[0]] : 0) + 1;
        }
    }
    return formatedData;
}

export default formatLog;

/*
61 : {
    dates : {
        "2013-04-19": "1"
    }
    impression:12,
    conversion:12,
    revenue: 12
}
*/