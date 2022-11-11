export default function Settings({ gridX, gridY, legend, linelabel, setLabelNameX, toggleLegend, setLabelNameY, setDomainYStart, setHeight, setWidth, toggleLineLabel, toggleGridX, toggleGridY }) {
    function labelNameXChangeHandler(event) {
        setLabelNameX(event.target.value)

    }

    function labelNameYChangeHandler(event) {
        setLabelNameY(event.target.value)

    }
    function domainYStartChangeHandler(event) {
        setDomainYStart(Number(event.target.value))
    }

    // function domainYEndChangeHandler(event) {
    //     setDomainY(prev => prev[1] = Number(event.target.value))
    // }

    function heightChangeHandler(event) {
        setHeight(event.target.value)

    }

    function widthChangeHandler(event) {
        setWidth(event.target.value)

    }


    return (
        <div className="controls">
            <div className="clickboxes">
                <input type="checkbox" checked={legend} onChange={() => toggleLegend((prev) => !prev)} /><span>legend</span>
                <input type="checkbox" checked={linelabel} onChange={() => toggleLineLabel((prev) => !prev)} /><span>Line Label</span>
                <input type="checkbox" checked={gridX} onChange={() => toggleGridX((prev) => !prev)} /><span>X grid</span>
                <input type="checkbox" checked={gridY} onChange={() => toggleGridY((prev) => !prev)} /><span>Y grid</span>
            </div>
            <form>
                <div className="labelname">
                    <label>
                        Label name of X axis:
                    </label>
                    <input type="text" name="labelNameX" defaultValue={"X axis"} onChange={labelNameXChangeHandler} />
                    <label>
                        Label name of Y axis:
                    </label>
                    <input type="text" name="labelNameY" defaultValue={"Y axis"} onChange={labelNameYChangeHandler} />

                </div>
                <div className="domain">
                    <label>
                        Y axis starts at:
                    </label>
                    <input type="number" name="domainYStart" defaultValue={0} onChange={domainYStartChangeHandler} />
                    {/* <label>
                    Start at:
                </label>
                <input type="number" name="domainYEnd" onChange={domainYEndChangeHandler} /> */}
                </div>
                <div className="heightandwidth">
                    <label>
                        Height:
                    </label>
                    <input type="range" name="height" min="0" max="1500" defaultValue={396} onChange={heightChangeHandler} />
                    <label>
                        Width:
                    </label>
                    <input type="range" name="width" min="0" max="1500" defaultValue={534} onChange={widthChangeHandler} />
                </div>
            </form>
        </div>

    );
} 