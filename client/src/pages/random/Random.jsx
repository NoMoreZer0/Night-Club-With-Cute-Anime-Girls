import React, {
    useEffect,
    useState
} from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api";
import Loader from "../../components/loader/Loader";

const Random = () => {
    const navigate = useNavigate();
    const [animeId, setAnimeId] = useState(null);
    useEffect(() => {
        const getRandom = async () => {
            try {
                const res = await Api.get("/animes/random", {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVmMTAzMjQzNDE3MWZkYTE2Mjc5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzA2MzkwMSwiZXhwIjoxNjc3NDk1OTAxfQ.JBWp0JFlYK930hf6T2cW2oNE4uAUix-ir5Ww_IIpzEA"
                        // +JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setAnimeId(res.data[0]._id);

            } catch (err) {
                console.log(err);
            }
        };
        getRandom();
    }, []);

    if (animeId) {
        console.log(animeId);
        navigate(`/watch/${animeId}`);
    }
    return (
        <Loader />
    );
};

export default Random;
