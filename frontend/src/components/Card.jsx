import React from 'react'

const Card = ({header, description, icon}) => {
    return (
        <div className="ui raised card">
            <div className="content">
                <div className="ui center aligned floated">
                    <i className={icon}></i>
                </div>
                <br />
                <div className="center aligned header">{header}</div>
                <div className="meta">
                </div>
                <div className="description">
                    <p> {description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
