import React from 'react';

import { useCSVReader } from 'react-papaparse';


export default function Upload() {
    const { CSVReader } = useCSVReader();
    return (
        <div className="upload">
            <CSVReader
                onUploadAccepted={(results) => {
                    console.log('---------------------------');
                    console.log(results);
                    console.log('---------------------------');
                }}
            >
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
                            <button {...getRemoveFileProps()}>
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