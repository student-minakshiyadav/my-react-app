import styles from "./Netflix.module.css";
import styled from "styled-components";
export const SereisCard = ({ data }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    // const btn_style = {}
    const Buttonthapa = styled.button({
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: rating > 8.5 ? "#7dcea0" : "#f7dc6f",
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
    });

    //     const Buttonthapa = styled.button`
    //         padding: "1.2rem 2.4rem";
    //         border: "none";
    //         font-size: "1.6rem";
    //         background-color: ${(props)=>
    //             props.rating>=8.5?"#7dcea0":"#f7dc6f"
    //         };
    //        color: "var(--btn-color)";
    //         fontWeight: "bold";
    //         cursor: "pointer";
    //  `;

    const Rating = styled.h3`
   font-size:1.3rem;
   color:#7dcea0;
   text-teansformation:capitalize;
   `;
    const ratingClass = rating > 8.5 ? styles.superhit : styles.average;
    return (
        <li className={styles.card}>
            <div>
                <img
                    src={data.img_url}
                    alt="qot.jpg"
                    width="40%"
                    height="40%"
                /> 
            </div>
            <div className={styles["card-content"]}>
                <h2>Name:{name}</h2>
                <Rating>
                    Rating:
                    <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
                </Rating>
                <p>Summary:{description}</p>
                <p>Genere :{genre}</p>
                <p>Cast:{cast}</p>
                <a href={watch_url} target="_blank">
                    <Buttonthapa>Watch Now</Buttonthapa>
                </a>
            </div>
        </li>
    );

}