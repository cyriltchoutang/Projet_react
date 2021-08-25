import React, {Component} from 'react'

const post = (props) => (
    <article className="Post" onClick={props.clicked}>  {/*on le rend cliquable*/}
        <h1>{props.titre}</h1>
        <div>
            <div className="Auteur">{props.auteur}</div>
        </div>
    </article>
)


export default post;