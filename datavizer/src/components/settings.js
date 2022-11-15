export default function Settings({ height, width, gridX, gridY, legend, linelabel, labelNameX, labelNameY, domainYStart, setLabelNameX, toggleLegend, setLabelNameY, setDomainYStart, setHeight, setWidth, toggleLineLabel, toggleGridX, toggleGridY, setChartSetting }) {
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
                <label htmlFor="legend">legend</label>
                <input type="checkbox" name="legend" checked={legend} onChange={() => toggleLegend((prev) => !prev)} />
                <label htmlFor="linelabel">Line Label</label>
                <input type="checkbox" name="linelabel" checked={linelabel} onChange={() => toggleLineLabel((prev) => !prev)} />
                <label htmlFor="gridX">X Grid</label>
                <input type="checkbox" name="gridX" checked={gridX} onChange={() => toggleGridX((prev) => !prev)} />
                <label htmlFor="gridY">Y Grid</label>
                <input type="checkbox" name="gridY" checked={gridY} onChange={() => toggleGridY((prev) => !prev)} />
            </div>
            <form className="settingsform">
                <div className="labelname">
                    <label>
                        Label name of X axis:
                    </label>
                    <input type="text" name="labelNameX" defaultValue={"ie: X axis"} onChange={labelNameXChangeHandler} />
                    <label>
                        Label name of Y axis:
                    </label>
                    <input type="text" name="labelNameY" defaultValue={"ie: Y axis"} onChange={labelNameYChangeHandler} />

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
                    {/* <label>
                        Height:
                    </label>
                    <input type="range" name="height" min="0" max="1500" defaultValue={396} onChange={heightChangeHandler} /> */}
                    <label>
                        Width:
                    </label>
                    <input type="range" name="width" min="0" max="1500" defaultValue={534} onChange={widthChangeHandler} />
                </div>

            </form>
        </div>

    );
} 