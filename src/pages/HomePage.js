import React from 'react';
import Article from "../components/Article";
import article01 from "../images/article01.jpg";
import article02 from "../images/article02.jpg";
import article03 from "../images/article03.jpg";
import article04 from "../images/article04.jpg";
import { Pagination, paginationBasic} from "react-bootstrap";

const articles = [
    {
        id: 1,
        title: "6 new fish species!",
        text: "Nam lectus purus, mattis a eros. In blandit nec ante in varius. Aenean mollis libero ut justo posuere congue ac eget elit. Maecenas pretium sapien risus, et aliquet enim aliquet sed. Nam turpis magna, pretium eu finibus ac, porta at erat. Quisque hendrerit sed magna et gravida. Integer consectetur dui ac condimentum aliquet. Pellentesque quis dictum orci lacinia dignissim. Aenean in sapien sem. Donec vitae risus eros.",
        image: article01
    },
    {
        id: 2,
        title: "Happy birthday Racoon John!",
        text: "Lorem ipsum dolor sit amet. Mattis a eros. In blandit nec ante in varius. Aenean mollis libero ut justo posuere congue ac eget elit. Maecenas pretium sapien risus, et aliquet enim aliquet sed. Nam turpis magna, pretium eu finibus ac, porta at erat. Quisque hendrerit sed magna et gravida. Pellentesque fermentum ullamcorper risus, quis dictum orci lacinia dignissim. Aenean in sapien sem. Donec vitae risus eros.",
        image: article02
    },
    {
        id: 3,
        title: "Rhinoceros' area already renowated.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus purus, cursus eget bibendum posuere, mattis a eros. Pellentesque fermentum ullamcorper risus, quis dictum orci lacinia dignissim.",
        image: article03
    },
    {
        id: 4,
        title: "New baby was born!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus purus, cursus eget bibendum posuere, mattis a eros. In blandit nec ante in varius. Aenean mollis libero ut justo posuere congue ac eget elit. Nam turpis magna, pretium eu finibus ac, porta at erat. Quisque hendrerit sed magna et gravida. Pellentesque fermentum ullamcorper risus. Aenean in sapien sem. Donec vitae risus eros.",
        image: article04
    }
];



const HomePage = () => {

    const artList = articles.map(article =>(
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;