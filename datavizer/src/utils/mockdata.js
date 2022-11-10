//In this form, it depends on correct column name to indentify what is the date

//column formatted
const origindata = {
    "data": [
        {
            "Years": "1980",
            "China": "66.844",
            "Spain": "75.34926829",
            "Germany": "72.67790244",
            "UK": "73.67560976",
            "US": "73.6097561",
            "India": "53.814"
        },
        {
            "Years": "1981",
            "China": "67.26",
            "Spain": "75.52853659",
            "Germany": "72.95039024",
            "UK": "74.02682927",
            "US": "74.0097561",
            "India": "54.268"
        },
        {
            "Years": "1982",
            "China": "67.627",
            "Spain": "76.13414634",
            "Germany": "73.227",
            "UK": "74.17804878",
            "US": "74.36097561",
            "India": "54.686"
        },
        {
            "Years": "1983",
            "China": "67.949",
            "Spain": "75.90902439",
            "Germany": "73.50519512",
            "UK": "74.37804878",
            "US": "74.46341463",
            "India": "55.074"
        },
        {
            "Years": "1984",
            "China": "68.231",
            "Spain": "76.29536585",
            "Germany": "73.78292683",
            "UK": "74.77804878",
            "US": "74.56341463",
            "India": "55.441"
        },
        {
            "Years": "1985",
            "China": "68.473",
            "Spain": "76.2595122",
            "Germany": "74.05463415",
            "UK": "74.62926829",
            "US": "74.56341463",
            "India": "55.801"
        },
        {
            "Years": "1986",
            "China": "68.673",
            "Spain": "76.5104878",
            "Germany": "74.31373171",
            "UK": "74.92926829",
            "US": "74.61463415",
            "India": "56.169"
        },
        {
            "Years": "1987",
            "China": "68.831",
            "Spain": "76.72804878",
            "Germany": "74.55968293",
            "UK": "75.2804878",
            "US": "74.76585366",
            "India": "56.553"
        },
        {
            "Years": "1988",
            "China": "68.954",
            "Spain": "76.74707317",
            "Germany": "74.7924878",
            "UK": "75.3804878",
            "US": "74.76585366",
            "India": "56.963"
        },
        {
            "Years": "1989",
            "China": "69.054",
            "Spain": "76.81365854",
            "Germany": "75.01314634",
            "UK": "75.58292683",
            "US": "75.01707317",
            "India": "57.4"
        },
        {
            "Years": "1990",
            "China": "69.145",
            "Spain": "76.83756098",
            "Germany": "75.2277561",
            "UK": "75.8804878",
            "US": "75.21463415",
            "India": "57.865"
        },
        {
            "Years": "1991",
            "China": "69.242",
            "Spain": "76.97121951",
            "Germany": "75.3195122",
            "UK": "76.08292683",
            "US": "75.36585366",
            "India": "58.353"
        },
        {
            "Years": "1992",
            "China": "69.355",
            "Spain": "77.41",
            "Germany": "75.8195122",
            "UK": "76.43414634",
            "US": "75.61707317",
            "India": "58.851"
        },
        {
            "Years": "1993",
            "China": "69.496",
            "Spain": "77.54658537",
            "Germany": "75.87073171",
            "UK": "76.38536585",
            "US": "75.4195122",
            "India": "59.349"
        },
        {
            "Years": "1994",
            "China": "69.67",
            "Spain": "77.90146341",
            "Germany": "76.27073171",
            "UK": "76.88536585",
            "US": "75.6195122",
            "India": "59.84"
        },
        {
            "Years": "1995",
            "China": "69.885",
            "Spain": "77.98073171",
            "Germany": "76.42195122",
            "UK": "76.83658537",
            "US": "75.62195122",
            "India": "60.32"
        },
        {
            "Years": "1996",
            "China": "70.14",
            "Spain": "78.1204878",
            "Germany": "76.67317073",
            "UK": "77.08780488",
            "US": "76.02682927",
            "India": "60.783"
        },
        {
            "Years": "1997",
            "China": "70.428",
            "Spain": "78.60414634",
            "Germany": "77.07317073",
            "UK": "77.21097561",
            "US": "76.42926829",
            "India": "61.233"
        },
        {
            "Years": "1998",
            "China": "70.737",
            "Spain": "78.66585366",
            "Germany": "77.47560976",
            "UK": "77.1902439",
            "US": "76.5804878",
            "India": "61.669"
        },
        {
            "Years": "1999",
            "China": "71.063",
            "Spain": "78.71707317",
            "Germany": "77.72682927",
            "UK": "77.3902439",
            "US": "76.58292683",
            "India": "62.093"
        },
        {
            "Years": "2000",
            "China": "71.397",
            "Spain": "78.96585366",
            "Germany": "77.92682927",
            "UK": "77.74146341",
            "US": "76.63658537",
            "India": "62.505"
        },
        {
            "Years": "2001",
            "China": "71.732",
            "Spain": "79.36829268",
            "Germany": "78.32926829",
            "UK": "77.99268293",
            "US": "76.83658537",
            "India": "62.907"
        },
        {
            "Years": "2002",
            "China": "72.061",
            "Spain": "79.56829268",
            "Germany": "78.22926829",
            "UK": "78.14390244",
            "US": "76.93658537",
            "India": "63.304"
        },
        {
            "Years": "2003",
            "China": "72.381",
            "Spain": "79.6195122",
            "Germany": "78.3804878",
            "UK": "78.44634146",
            "US": "77.03658537",
            "India": "63.699"
        },
        {
            "Years": "2004",
            "China": "72.689",
            "Spain": "79.87073171",
            "Germany": "78.6804878",
            "UK": "78.74634146",
            "US": "77.48780488",
            "India": "64.095"
        },
        {
            "Years": "2005",
            "China": "72.985",
            "Spain": "80.17073171",
            "Germany": "78.93170732",
            "UK": "79.04878049",
            "US": "77.48780488",
            "India": "64.5"
        },
        {
            "Years": "2006",
            "China": "73.271",
            "Spain": "80.82195122",
            "Germany": "79.13170732",
            "UK": "79.24878049",
            "US": "77.68780488",
            "India": "64.918"
        },
        {
            "Years": "2007",
            "China": "73.553",
            "Spain": "80.87317073",
            "Germany": "79.53414634",
            "UK": "79.44878049",
            "US": "77.98780488",
            "India": "65.35"
        },
        {
            "Years": "2008",
            "China": "73.835",
            "Spain": "81.17560976",
            "Germany": "79.73658537",
            "UK": "79.6",
            "US": "78.03902439",
            "India": "65.794"
        },
        {
            "Years": "2009",
            "China": "74.119",
            "Spain": "81.47560976",
            "Germany": "79.83658537",
            "UK": "80.05121951",
            "US": "78.3902439",
            "India": "66.244"
        },
        {
            "Years": "2010",
            "China": "74.409",
            "Spain": "81.62682927",
            "Germany": "79.98780488",
            "UK": "80.40243902",
            "US": "78.54146341",
            "India": "66.693"
        },
        {
            "Years": "2011",
            "China": "74.708",
            "Spain": "82.47560976",
            "Germany": "80.43658537",
            "UK": "80.95121951",
            "US": "78.64146341",
            "India": "67.13"
        },
        {
            "Years": "2012",
            "China": "75.013",
            "Spain": "82.42682927",
            "Germany": "80.53902439",
            "UK": "80.90487805",
            "US": "78.74146341",
            "India": "67.545"
        },
        {
            "Years": "2013",
            "China": "75.321",
            "Spain": "83.07804878",
            "Germany": "80.4902439",
            "UK": "81.00487805",
            "US": "78.74146341",
            "India": "67.931"
        },
        {
            "Years": "2014",
            "China": "75.629",
            "Spain": "83.22926829",
            "Germany": "81.0902439",
            "UK": "81.30487805",
            "US": "78.84146341",
            "India": "68.286"
        },
        {
            "Years": "2015",
            "China": "75.928",
            "Spain": "82.83170732",
            "Germany": "80.64146341",
            "UK": "80.95609756",
            "US": "78.6902439",
            "India": "68.607"
        },
        {
            "Years": "2016",
            "China": "76.21",
            "Spain": "83.32926829",
            "Germany": "80.9902439",
            "UK": "81.15609756",
            "US": "78.53902439",
            "India": "68.897"
        },
        {
            "Years": "2017",
            "China": "76.47",
            "Spain": "83.28292683",
            "Germany": "80.99268293",
            "UK": "81.25609756",
            "US": "78.53902439",
            "India": "69.165"
        },
        {
            "Years": "2018",
            "China": "76.704",
            "Spain": "83.43170732",
            "Germany": "80.89268293",
            "UK": "81.25609756",
            "US": "78.63902439",
            "India": "69.416"
        },
        {
            "Years": "2019",
            "China": "76.912",
            "Spain": "83.83170732",
            "Germany": "81.29268293",
            "UK": "81.20487805",
            "US": "78.78780488",
            "India": "69.656"
        },
        {
            "Years": "2020",
            "China": "77.097",
            "Spain": "82.33414634",
            "Germany": "80.94146341",
            "UK": "80.90243902",
            "US": "77.2804878",
            "India": "69.887"
        },
        {
            "Years": ""
        }
    ],
    "errors": [
        [
            {
                "type": "FieldMismatch",
                "code": "TooFewFields",
                "message": "Too few fields: expected 7 fields but parsed 1",
                "row": 41
            }
        ]
    ],
    "meta": []
}

//row formatted
const origindata2 = {
    "data": [
        {
            "1980": 66.844,
            "1981": 67.26,
            "1982": 67.627,
            "1983": 67.949,
            "1984": 68.231,
            "1985": 68.473,
            "1986": 68.673,
            "1987": 68.831,
            "1988": 68.954,
            "1989": 69.054,
            "1990": 69.145,
            "1991": 69.242,
            "1992": 69.355,
            "1993": 69.496,
            "1994": 69.67,
            "1995": 69.885,
            "1996": 70.14,
            "1997": 70.428,
            "1998": 70.737,
            "1999": 71.063,
            "2000": 71.397,
            "2001": 71.732,
            "2002": 72.061,
            "2003": 72.381,
            "2004": 72.689,
            "2005": 72.985,
            "2006": 73.271,
            "2007": 73.553,
            "2008": 73.835,
            "2009": 74.119,
            "2010": 74.409,
            "2011": 74.708,
            "2012": 75.013,
            "2013": 75.321,
            "2014": 75.629,
            "2015": 75.928,
            "2016": 76.21,
            "2017": 76.47,
            "2018": 76.704,
            "2019": 76.912,
            "2020": 77.097,
            "Country Name": "China"
        },
        {
            "1980": 75.34926829,
            "1981": 75.52853659,
            "1982": 76.13414634,
            "1983": 75.90902439,
            "1984": 76.29536585,
            "1985": 76.2595122,
            "1986": 76.5104878,
            "1987": 76.72804878,
            "1988": 76.74707317,
            "1989": 76.81365854,
            "1990": 76.83756098,
            "1991": 76.97121951,
            "1992": 77.41,
            "1993": 77.54658537,
            "1994": 77.90146341,
            "1995": 77.98073171,
            "1996": 78.1204878,
            "1997": 78.60414634,
            "1998": 78.66585366,
            "1999": 78.71707317,
            "2000": 78.96585366,
            "2001": 79.36829268,
            "2002": 79.56829268,
            "2003": 79.6195122,
            "2004": 79.87073171,
            "2005": 80.17073171,
            "2006": 80.82195122,
            "2007": 80.87317073,
            "2008": 81.17560976,
            "2009": 81.47560976,
            "2010": 81.62682927,
            "2011": 82.47560976,
            "2012": 82.42682927,
            "2013": 83.07804878,
            "2014": 83.22926829,
            "2015": 82.83170732,
            "2016": 83.32926829,
            "2017": 83.28292683,
            "2018": 83.43170732,
            "2019": 83.83170732,
            "2020": 82.33414634,
            "Country Name": "Spain"
        },
        {
            "1980": 72.67790244,
            "1981": 72.95039024,
            "1982": 73.227,
            "1983": 73.50519512,
            "1984": 73.78292683,
            "1985": 74.05463415,
            "1986": 74.31373171,
            "1987": 74.55968293,
            "1988": 74.7924878,
            "1989": 75.01314634,
            "1990": 75.2277561,
            "1991": 75.3195122,
            "1992": 75.8195122,
            "1993": 75.87073171,
            "1994": 76.27073171,
            "1995": 76.42195122,
            "1996": 76.67317073,
            "1997": 77.07317073,
            "1998": 77.47560976,
            "1999": 77.72682927,
            "2000": 77.92682927,
            "2001": 78.32926829,
            "2002": 78.22926829,
            "2003": 78.3804878,
            "2004": 78.6804878,
            "2005": 78.93170732,
            "2006": 79.13170732,
            "2007": 79.53414634,
            "2008": 79.73658537,
            "2009": 79.83658537,
            "2010": 79.98780488,
            "2011": 80.43658537,
            "2012": 80.53902439,
            "2013": 80.4902439,
            "2014": 81.0902439,
            "2015": 80.64146341,
            "2016": 80.9902439,
            "2017": 80.99268293,
            "2018": 80.89268293,
            "2019": 81.29268293,
            "2020": 80.94146341,
            "Country Name": "Germany"
        },
        {
            "1980": 73.67560976,
            "1981": 74.02682927,
            "1982": 74.17804878,
            "1983": 74.37804878,
            "1984": 74.77804878,
            "1985": 74.62926829,
            "1986": 74.92926829,
            "1987": 75.2804878,
            "1988": 75.3804878,
            "1989": 75.58292683,
            "1990": 75.8804878,
            "1991": 76.08292683,
            "1992": 76.43414634,
            "1993": 76.38536585,
            "1994": 76.88536585,
            "1995": 76.83658537,
            "1996": 77.08780488,
            "1997": 77.21097561,
            "1998": 77.1902439,
            "1999": 77.3902439,
            "2000": 77.74146341,
            "2001": 77.99268293,
            "2002": 78.14390244,
            "2003": 78.44634146,
            "2004": 78.74634146,
            "2005": 79.04878049,
            "2006": 79.24878049,
            "2007": 79.44878049,
            "2008": 79.6,
            "2009": 80.05121951,
            "2010": 80.40243902,
            "2011": 80.95121951,
            "2012": 80.90487805,
            "2013": 81.00487805,
            "2014": 81.30487805,
            "2015": 80.95609756,
            "2016": 81.15609756,
            "2017": 81.25609756,
            "2018": 81.25609756,
            "2019": 81.20487805,
            "2020": 80.90243902,
            "Country Name": "UK"
        },
        {
            "1980": 73.6097561,
            "1981": 74.0097561,
            "1982": 74.36097561,
            "1983": 74.46341463,
            "1984": 74.56341463,
            "1985": 74.56341463,
            "1986": 74.61463415,
            "1987": 74.76585366,
            "1988": 74.76585366,
            "1989": 75.01707317,
            "1990": 75.21463415,
            "1991": 75.36585366,
            "1992": 75.61707317,
            "1993": 75.4195122,
            "1994": 75.6195122,
            "1995": 75.62195122,
            "1996": 76.02682927,
            "1997": 76.42926829,
            "1998": 76.5804878,
            "1999": 76.58292683,
            "2000": 76.63658537,
            "2001": 76.83658537,
            "2002": 76.93658537,
            "2003": 77.03658537,
            "2004": 77.48780488,
            "2005": 77.48780488,
            "2006": 77.68780488,
            "2007": 77.98780488,
            "2008": 78.03902439,
            "2009": 78.3902439,
            "2010": 78.54146341,
            "2011": 78.64146341,
            "2012": 78.74146341,
            "2013": 78.74146341,
            "2014": 78.84146341,
            "2015": 78.6902439,
            "2016": 78.53902439,
            "2017": 78.53902439,
            "2018": 78.63902439,
            "2019": 78.78780488,
            "2020": 77.2804878,
            "Country Name": "US"
        },
        {
            "1980": 53.814,
            "1981": 54.268,
            "1982": 54.686,
            "1983": 55.074,
            "1984": 55.441,
            "1985": 55.801,
            "1986": 56.169,
            "1987": 56.553,
            "1988": 56.963,
            "1989": 57.4,
            "1990": 57.865,
            "1991": 58.353,
            "1992": 58.851,
            "1993": 59.349,
            "1994": 59.84,
            "1995": 60.32,
            "1996": 60.783,
            "1997": 61.233,
            "1998": 61.669,
            "1999": 62.093,
            "2000": 62.505,
            "2001": 62.907,
            "2002": 63.304,
            "2003": 63.699,
            "2004": 64.095,
            "2005": 64.5,
            "2006": 64.918,
            "2007": 65.35,
            "2008": 65.794,
            "2009": 66.244,
            "2010": 66.693,
            "2011": 67.13,
            "2012": 67.545,
            "2013": 67.931,
            "2014": 68.286,
            "2015": 68.607,
            "2016": 68.897,
            "2017": 69.165,
            "2018": 69.416,
            "2019": 69.656,
            "2020": 69.887,
            "Country Name": "India"
        },
        {
            "Country Name": null
        }
    ],
    "errors": [
        [
            {
                "type": "FieldMismatch",
                "code": "TooFewFields",
                "message": "Too few fields: expected 42 fields but parsed 1",
                "row": 6
            }
        ]
    ],
    "meta": []
}

const tidiedUpData = {
    "data": [
        {
            "Country": "China",
            "Year": 1980,
            "Life Exp": 66.844
        },
        {
            "Country": "China",
            "Year": 1981,
            "Life Exp": 67.26
        },
        {
            "Country": "China",
            "Year": 1982,
            "Life Exp": 67.627
        },
        {
            "Country": "China",
            "Year": 1983,
            "Life Exp": 67.949
        },
        {
            "Country": "China",
            "Year": 1984,
            "Life Exp": 68.231
        },
        {
            "Country": "China",
            "Year": 1985,
            "Life Exp": 68.473
        },
        {
            "Country": "China",
            "Year": 1986,
            "Life Exp": 68.673
        },
        {
            "Country": "China",
            "Year": 1987,
            "Life Exp": 68.831
        },
        {
            "Country": "China",
            "Year": 1988,
            "Life Exp": 68.954
        },
        {
            "Country": "China",
            "Year": 1989,
            "Life Exp": 69.054
        },
        {
            "Country": "China",
            "Year": 1990,
            "Life Exp": 69.145
        },
        {
            "Country": "China",
            "Year": 1991,
            "Life Exp": 69.242
        },
        {
            "Country": "China",
            "Year": 1992,
            "Life Exp": 69.355
        },
        {
            "Country": "China",
            "Year": 1993,
            "Life Exp": 69.496
        },
        {
            "Country": "China",
            "Year": 1994,
            "Life Exp": 69.67
        },
        {
            "Country": "China",
            "Year": 1995,
            "Life Exp": 69.885
        },
        {
            "Country": "China",
            "Year": 1996,
            "Life Exp": 70.14
        },
        {
            "Country": "China",
            "Year": 1997,
            "Life Exp": 70.428
        },
        {
            "Country": "China",
            "Year": 1998,
            "Life Exp": 70.737
        },
        {
            "Country": "China",
            "Year": 1999,
            "Life Exp": 71.063
        },
        {
            "Country": "China",
            "Year": 2000,
            "Life Exp": 71.397
        },
        {
            "Country": "China",
            "Year": 2001,
            "Life Exp": 71.732
        },
        {
            "Country": "China",
            "Year": 2002,
            "Life Exp": 72.061
        },
        {
            "Country": "China",
            "Year": 2003,
            "Life Exp": 72.381
        },
        {
            "Country": "China",
            "Year": 2004,
            "Life Exp": 72.689
        },
        {
            "Country": "China",
            "Year": 2005,
            "Life Exp": 72.985
        },
        {
            "Country": "China",
            "Year": 2006,
            "Life Exp": 73.271
        },
        {
            "Country": "China",
            "Year": 2007,
            "Life Exp": 73.553
        },
        {
            "Country": "China",
            "Year": 2008,
            "Life Exp": 73.835
        },
        {
            "Country": "China",
            "Year": 2009,
            "Life Exp": 74.119
        },
        {
            "Country": "China",
            "Year": 2010,
            "Life Exp": 74.409
        },
        {
            "Country": "China",
            "Year": 2011,
            "Life Exp": 74.708
        },
        {
            "Country": "China",
            "Year": 2012,
            "Life Exp": 75.013
        },
        {
            "Country": "China",
            "Year": 2013,
            "Life Exp": 75.321
        },
        {
            "Country": "China",
            "Year": 2014,
            "Life Exp": 75.629
        },
        {
            "Country": "China",
            "Year": 2015,
            "Life Exp": 75.928
        },
        {
            "Country": "China",
            "Year": 2016,
            "Life Exp": 76.21
        },
        {
            "Country": "China",
            "Year": 2017,
            "Life Exp": 76.47
        },
        {
            "Country": "China",
            "Year": 2018,
            "Life Exp": 76.704
        },
        {
            "Country": "China",
            "Year": 2019,
            "Life Exp": 76.912
        },
        {
            "Country": "China",
            "Year": 2020,
            "Life Exp": 77.097
        },
        {
            "Country": "UK",
            "Year": 1980,
            "Life Exp": 73.67560976
        },
        {
            "Country": "UK",
            "Year": 1981,
            "Life Exp": 74.02682927
        },
        {
            "Country": "UK",
            "Year": 1982,
            "Life Exp": 74.17804878
        },
        {
            "Country": "UK",
            "Year": 1983,
            "Life Exp": 74.37804878
        },
        {
            "Country": "UK",
            "Year": 1984,
            "Life Exp": 74.77804878
        },
        {
            "Country": "UK",
            "Year": 1985,
            "Life Exp": 74.62926829
        },
        {
            "Country": "UK",
            "Year": 1986,
            "Life Exp": 74.92926829
        },
        {
            "Country": "UK",
            "Year": 1987,
            "Life Exp": 75.2804878
        },
        {
            "Country": "UK",
            "Year": 1988,
            "Life Exp": 75.3804878
        },
        {
            "Country": "UK",
            "Year": 1989,
            "Life Exp": 75.58292683
        },
        {
            "Country": "UK",
            "Year": 1990,
            "Life Exp": 75.8804878
        },
        {
            "Country": "UK",
            "Year": 1991,
            "Life Exp": 76.08292683
        },
        {
            "Country": "UK",
            "Year": 1992,
            "Life Exp": 76.43414634
        },
        {
            "Country": "UK",
            "Year": 1993,
            "Life Exp": 76.38536585
        },
        {
            "Country": "UK",
            "Year": 1994,
            "Life Exp": 76.88536585
        },
        {
            "Country": "UK",
            "Year": 1995,
            "Life Exp": 76.83658537
        },
        {
            "Country": "UK",
            "Year": 1996,
            "Life Exp": 77.08780488
        },
        {
            "Country": "UK",
            "Year": 1997,
            "Life Exp": 77.21097561
        },
        {
            "Country": "UK",
            "Year": 1998,
            "Life Exp": 77.1902439
        },
        {
            "Country": "UK",
            "Year": 1999,
            "Life Exp": 77.3902439
        },
        {
            "Country": "UK",
            "Year": 2000,
            "Life Exp": 77.74146341
        },
        {
            "Country": "UK",
            "Year": 2001,
            "Life Exp": 77.99268293
        },
        {
            "Country": "UK",
            "Year": 2002,
            "Life Exp": 78.14390244
        },
        {
            "Country": "UK",
            "Year": 2003,
            "Life Exp": 78.44634146
        },
        {
            "Country": "UK",
            "Year": 2004,
            "Life Exp": 78.74634146
        },
        {
            "Country": "UK",
            "Year": 2005,
            "Life Exp": 79.04878049
        },
        {
            "Country": "UK",
            "Year": 2006,
            "Life Exp": 79.24878049
        },
        {
            "Country": "UK",
            "Year": 2007,
            "Life Exp": 79.44878049
        },
        {
            "Country": "UK",
            "Year": 2008,
            "Life Exp": 79.6
        },
        {
            "Country": "UK",
            "Year": 2009,
            "Life Exp": 80.05121951
        },
        {
            "Country": "UK",
            "Year": 2010,
            "Life Exp": 80.40243902
        },
        {
            "Country": "UK",
            "Year": 2011,
            "Life Exp": 80.95121951
        },
        {
            "Country": "UK",
            "Year": 2012,
            "Life Exp": 80.90487805
        },
        {
            "Country": "UK",
            "Year": 2013,
            "Life Exp": 81.00487805
        },
        {
            "Country": "UK",
            "Year": 2014,
            "Life Exp": 81.30487805
        },
        {
            "Country": "UK",
            "Year": 2015,
            "Life Exp": 80.95609756
        },
        {
            "Country": "UK",
            "Year": 2016,
            "Life Exp": 81.15609756
        },
        {
            "Country": "UK",
            "Year": 2017,
            "Life Exp": 81.25609756
        },
        {
            "Country": "UK",
            "Year": 2018,
            "Life Exp": 81.25609756
        },
        {
            "Country": "UK",
            "Year": 2019,
            "Life Exp": 81.20487805
        },
        {
            "Country": "UK",
            "Year": 2020,
            "Life Exp": 80.90243902
        },
        {
            "Country": null
        }
    ],
    "errors": [
        [
            {
                "type": "FieldMismatch",
                "code": "TooFewFields",
                "message": "Too few fields: expected 3 fields but parsed 1",
                "row": 82
            }
        ]
    ],
    "meta": []
}


const finaldata = [];
origindata2.data.forEach((country) => {
    const entries = Object.entries(country)
    for (let [time, value] of entries) {
        const yearObj = {
            Country: country["Country Name"],
            Year: Number(time),
            "Life Exp": value
        }
        console.log(yearObj, "yearObj")
        console.log(typeof yearObj["Life Exp"])
        if (yearObj.Country && typeof yearObj["Life Exp"] === "number") finaldata.push(yearObj)

    }
})
console.log(finaldata)
// data = origindata2.data

// data = tidiedUpData.data.map(a.Year => Number(a.Year))

// data = Object.entries(origindata2.data)

// console.log(data)

