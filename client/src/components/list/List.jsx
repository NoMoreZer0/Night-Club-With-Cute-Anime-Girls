import React, { useRef } from "react";
import ListItem from "../listItem/ListItem";
import { Navigation } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./list.scss";

const List = ({ list }) => {
    const listRef = useRef();

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <Swiper
                navigation={true}
                slidesPerView={4}
                loop={true}
                spaceBetween={30}
                modules={[Navigation]}
                ref={listRef}
                className="mySwiper container"
            >
                {list.content.map((item, i) => (
                    <SwiperSlide key={i}>
                        <ListItem
                            index={i}
                            item={item}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default List;
