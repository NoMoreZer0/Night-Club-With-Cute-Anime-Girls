import {
    Link,
    useParams
} from "react-router-dom";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import {
    useEffect,
    useState
} from "react";
import Api from "../../api";

export default function Watch() {
    const { animeId } = useParams();
    const [anime, setAnime] = useState({});

    useEffect(() => {
        const getVideo = async () => {
            try {
                const res = await Api.get("/animes/find/" + animeId, {
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
        getVideo();
    }, [animeId]);

    const videoPath = anime.video && anime.video.includes("youtube") && anime.video.split("v=")[1];
    // const youtubePath =
    //
    // console.log(youtubePath)

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <div className="content">
                <iframe
                    width="1000"
                    height="555"
                    src={videoPath ? `https://www.youtube.com/embed/${videoPath}` : "https://www.youtube.com/feed/subscriptions"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className="info">
                    <p>Title: {anime.title}</p>
                    <p>Description: {anime.desc}</p>
                    <p>Genre: {anime.genre}</p>
                    <p>Year: {anime.year}</p>
                    {!videoPath &&
                        <h1>This video is unavailable.</h1>
                    }
                </div>
            </div>
        </div>
    );
}
