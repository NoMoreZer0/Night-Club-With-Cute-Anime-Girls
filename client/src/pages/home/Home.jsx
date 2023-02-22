import React, {
    useEffect,
    useState
} from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Api from "../../api";
import Loader from "../../components/loader/Loader";
import "./home.scss";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };


    useEffect(() => {
        const getRandomLists = async () => {
                setIsLoading(true);
            try {
                const res = await Api.get("/lists", {
                        headers: {
                            token:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVmMTAzMjQzNDE3MWZkYTE2Mjc5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzA2MzkwMSwiZXhwIjoxNjc3NDk1OTAxfQ.JBWp0JFlYK930hf6T2cW2oNE4uAUix-ir5Ww_IIpzEA"
                            // + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
                setIsLoading(false);
        }
        getRandomLists();
    }, [genre]);

    const filteredAnime = selectedGenre
        ? lists.filter((anime) => {
            if (selectedGenre === "default") {
                return anime;
            }
            return anime.genre === selectedGenre
        })
        : lists;

    const sortedAnime = filteredAnime.sort((a, b) => a.title.localeCompare(b.title));


    return (
        <>
            <Navbar />
            <Featured
                type={type}
                selectedGenre={selectedGenre}
                onChange={handleChange}
            />
            {isLoading &&
                <Loader />
            }
            {sortedAnime.length === 0 &&
                <p className="noAnime">There's no anime in this genre</p>
            }
            {sortedAnime.map((list) =>
                <List
                    list={list}
                    key={list._id}
                />
            )}
        </>
    );
};

export default Home;
