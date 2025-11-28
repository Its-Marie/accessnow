import SimpleGeoJsonMap from "./SimpleGeoJsonMap.jsx.jsx"

export default function Planning() {
    return(
        <div>
            <form>
                <input type="text" placeholder="Starting Point" />
                <input type="text" placeholder="Destination"/>
                <button>Plan Route</button>
             </form>
            <SimpleGeoJsonMap/>
        </div>
    )
}

