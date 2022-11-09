# DataVIZer
## 

DataVIZer is inspired by established data visualization tools like DataWrapper and Flourish but offers all functionalities for free. Users can log in to their own workspace and choose the visualization template they want. By uploading a formatted CSV file or a link from Google Forms, the app will generate an interactive graph for them. Users can then change the settings or design of the graph until satisfied. The graph can be published on the app or exported as a line of script for embedding afterwards.

## MVP

Users should be able to upload a formatted CSV file following the instruction on the app to generate an interactive line chart.

## Tech stack


**Front End:**

React（no redux） Web application with D3(using Observable.Plot https://observablehq.com/@observablehq/plot ) for data visualization 

**Back End:**

Koa server with Mongoose + MongoDB

## Data sources

In case your app relies on some data to work properly, where are you planning to get that data from?

[https://hdr.undp.org/data-center/documentation-and-downloads](https://hdr.undp.org/data-center/documentation-and-downloads)