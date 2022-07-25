import "./Card.css"
import { useEffect, useState } from "react";
import LineGraph from "./LineGraph/LineGraph";

const Card = ({ user, log }) => {

    const [image, setImage] = useState(true);
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);

    const addDefaultSrc = (ev) => {
        setImage(false)
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const setValOfAxis = () => {
        let tempX = []
        let tempY = []
        for (let i in log.date) {
            tempX.push(i)
            tempY.push(log.date[i])
        }
        setX(tempX);
        setY(tempY);
        // console.log(log);
    }

    useEffect(() => {
        setValOfAxis();
    }, [])

    return (
        <div className="card-container">
            <div className="d-flex">
                {
                    image ? <img onError={addDefaultSrc} src={"user.avatar"} alt="profile" className="card-image" />
                        :
                        <div className="card-image d-flex justify-content-center align-items-center" style={{ backgroundColor: "hsl(204deg 70% 53%)" }}>
                            <span style={{ fontSize: "35px", color: "#ffffff" }}>{user.fields.Name.charAt(0)}</span>
                        </div>
                }
                <div style={{ marginLeft: "10px" }}>
                    <h4 className="user-name">{user.fields.Name}</h4>
                    <small className="user-occupation">{user.fields.occupation}</small>
                </div>
            </div>
            <div className="d-flex">
                <div className="user-graph">
                    <div><LineGraph x={x} y={y} /></div>
                    <span className="d-block text-center" style={{ color: "hsl(0deg 0% 56%)" }}>Conversions 4/12 - 4/30</span>
                </div>
                <div className="user-info">
                    <span className="d-block" style={{ color: "hsl(28deg 80% 52%)", height: "15px", fontWeight: "800" }}>
                        {log.impression}
                    </span>
                    <span className="d-block" style={{ color: "hsl(206deg 8% 83%)" }}>impression</span>
                    <span className="d-block" style={{ color: "hsl(204deg 62% 45%)", height: "15px", fontWeight: "800" }}>
                        {log.conversion}
                    </span>
                    <span className="d-block" style={{ color: "hsl(206deg 8% 83%)" }}>conversions</span>
                    <span className="d-block" style={{ color: "hsl(145deg 57% 45%)", fontWeight: "800" }}>
                        ${numberWithCommas(Math.round(log.revenue))}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;