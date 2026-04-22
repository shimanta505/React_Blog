const Weather = ({tempareture}) => {
    if(tempareture < 15){
        return (
            <>
            <h1>
                it's cold outside
            </h1>
            </>
        )
    }else if(tempareture >= 15 && tempareture <= 25){
        return (
            <>
            <h1>
                it's nice outside
            </h1>
            </>
        )
    }else if(tempareture > 25){
        return (
            <>
            <h1>
                it's hot outside
            </h1>
            </>
        )
    }
}

export default Weather;