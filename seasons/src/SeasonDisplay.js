import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: "sun icon"
    },
    winter: {
        text: "It's so cold",
        iconName: "snowflake icon"
    }
}

const getSeason = (lat,month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplayed = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
   
    return (
        <div>
            <i className={iconName} />
            <h1>{text}</h1>
            <i className={iconName} />
        </div>
    );
};

export default SeasonDisplayed;