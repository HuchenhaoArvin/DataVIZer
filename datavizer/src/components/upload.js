import React from 'react';

import { useCSVReader } from 'react-papaparse';
import { ApiService } from '../utils/apiService';
import { DataProcessor } from "../utils/dataProcessor"


export default function Upload({ setChartData }) {
    const { CSVReader } = useCSVReader();
    return (
        <div className="upload">
            <CSVReader onUploadAccepted={async (results) => {
                const a = DataProcessor.lineChart(results)
                console.log(a)
                ApiService.postLineGraph(a);
            }} config={{
                header: true,
                dynamicTyping: true
            }}>
                {/* this set the config to treat the first row as the header, setting doc https://react-papaparse.js.org/docs#config */}

                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                }) => (
                    <>
                        <div>
                            <button type='button' {...getRootProps()}>
                                Browse file
                            </button>
                            <div>
                                {acceptedFile && acceptedFile.name}
                            </div>
                            <button {...getRemoveFileProps()} >
                                Remove
                            </button>
                        </div>
                        <ProgressBar />
                    </>
                )}
            </CSVReader>
        </div>
    );
}