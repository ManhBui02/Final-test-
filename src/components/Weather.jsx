import { useMemo } from 'react';
import WeatherAsset from '../asset/WeatherAsset.json';
import { Fragment } from 'react';

export default function Weather({status, city, country, temperature, found}){
    const weatherImage = found ? WeatherAsset.filter(value => value.type === status).map(value=>value.img).join('') : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    return(
        <div className='weatherContainer'>
            {found && <div className='weatherTitle'>{`${city}, ${country}`}</div>}
            <div className='weatherImageWrap'>
                <img src={weatherImage} alt={status}/>
            </div>
            <div className='weatherTempurature'>{found? <Fragment>{temperature}<sup>o</sup>C</Fragment> : 'City not found!'}</div>
        </div>
    );
}