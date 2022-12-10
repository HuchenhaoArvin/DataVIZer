import React from 'react';

import { useCSVReader } from 'react-papaparse';
import { DataProcessor } from "../utils/dataProcessor"


export default function Upload({ setChartData }) {
    const { CSVReader } = useCSVReader();
    return (
        <div className="upload">
            <CSVReader onUploadAccepted={async (results) => {
                const processedData = DataProcessor.lineChart(results)
                setChartData(processedData)

            }} config={{
                header: true,
                dynamicTyping: true
            }}>
                {/* this set the config to treat the first row as the header, setting doc https://react-papaparse.js.org/docs#config */}

                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                }) => (
                    <>
                        <div className='uploadbuttonwrapper'>
                            <button type='button' className='uploadbutton' {...getRootProps()}>
                                Upload CSV File
                            </button>
                            <div>
                                {acceptedFile && acceptedFile.name}
                            </div>
                        </div>
                        <ProgressBar />
                    </>
                )}
            </CSVReader>
        </div>
    );
}