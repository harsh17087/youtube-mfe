import SingleButton from "./SingleButton"

const MainButton=()=>{
    
    return (
        
        // Use map method , first create array of button names
        <div className="">
         <div  className="flex whitespace-nowrap">
            <SingleButton name="All"/>
            <SingleButton name="Music"/>
            <SingleButton name="Cricket"/>
            <SingleButton name="Trailers"/>
            <SingleButton name="Thrillers"/>
            <SingleButton name="Mixes"/>
            <SingleButton name="T-Series"/>
            <SingleButton name="Banks"/>
            <SingleButton name="Live"/>
            <SingleButton name="Podcasts"/>
            <SingleButton name="Watched"/>
            
         </div>
         
        </div>
    )
}

export default MainButton