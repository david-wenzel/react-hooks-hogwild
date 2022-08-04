function HogDetails({hog}){

    return(
    <div>
        <div>{hog.specialty}</div>
        <div>{hog.greased ? "Is Greased" : "Is not greased"}</div>
        <div>{hog.weight} lbs</div>
        <div>{hog["highest medal achieved"]}</div>
    </div>
    )
}

export default HogDetails