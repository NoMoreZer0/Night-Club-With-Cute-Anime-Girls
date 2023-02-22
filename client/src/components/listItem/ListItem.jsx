import {
    useEffect,
    useState
} from "react";
import { Link } from "react-router-dom";
import "./listItem.css";
import {
    Add,
    PlayArrow,
    ThumbDownOutlined,
    ThumbUpAltOutlined,
} from "@mui/icons-material";
import Api from "../../api";

export default function ListItem({ item }) {
    const [anime, setAnime] = useState({});

    useEffect(() => {
        const getAnime = async () => {
            try {
                const res = await Api.get("/animes/find/" + item, {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVmMTAzMjQzNDE3MWZkYTE2Mjc5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzA2MzkwMSwiZXhwIjoxNjc3NDk1OTAxfQ.JBWp0JFlYK930hf6T2cW2oNE4uAUix-ir5Ww_IIpzEA"
                        // +JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setAnime(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getAnime();
    }, [item]);

    return (
        <Link to={`/watch/${anime._id}`}>
            <div className="listItem">
                <img
                    // src={anime.imgSm}
                    alt="anime poster"
                />
                {/*{isHovered && (*/}
                {/*    <>*/}
                {/*        <video*/}
                {/*            src={anime.trailer}*/}
                {/*            autoPlay={true}*/}
                {/*            loop*/}
                {/*        />*/}
                        {/*<div className="itemInfo">*/}
                        {/*    <div className="icons">*/}
                        {/*        <PlayArrow className="icon" />*/}
                        {/*        <Add className="icon" />*/}
                        {/*        <ThumbUpAltOutlined className="icon" />*/}
                        {/*        <ThumbDownOutlined className="icon" />*/}
                        {/*    </div>*/}
                        {/*    <div className="itemInfoTop">*/}
                        {/*        <span className="limit">{anime.limit}👍</span>*/}
                        {/*        <span>{anime.year}year</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="desc">{anime.desc}</div>*/}
                        {/*    <div className="genre">{anime.genre}</div>*/}
                        {/*</div>*/}
            {/*        </>*/}
            {/*    )}*/}
            </div>
        </Link>
    );
}
