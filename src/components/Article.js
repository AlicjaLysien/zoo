import React from 'react';

const Article = ({ title, text, image }) => {
    return (
        <article>
            <div className="container-fluid">            
                <div className="row">               
                    <div className="col-lg-4">
                        <div className="bg" style={{backgroundImage: `url(${image})`}}></div>
                    </div>
                    <div className="col-lg-8">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Article;