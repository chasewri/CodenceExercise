# Codence Exercise 

## Approach
My approach to this problem assumes that the incoming csv is at least slightly formatted. It assumes that the first two lines will be the general invoice information. It then assumes that the information in between will be line items, and the total will be supplied last. 

Right now the upload page takes an csv splits up the data to display in tables for the uploader to review. It does a simple check to see if the totals match. Highlighting the text in red if it doesn't match, however, right now, it's just taking the value at two decimal places. 

Things to do still:
- Find out if this is the way that csvs are planning to look
- add more checks to make sure that incoming data is the appropriate type
- add better alerts to the ui for data that does not seem correct
- create a function that will save the data into an object if it is verified and send it to the backend. 

## General Info
This is just a simple create react app with three pages. It has an index page of no real value at this time. It has a sign in form that will let anyone log in right now if both values are greater than 1, however, right now, it has just simple validation. 
The upload page, after login, allows a user to upload a csv file. 
This current project has implemented a few solutions to the problem, but still needs a lot of work. The upload file has not be split satisfactorily yet.

## Set up
It's a regular react app.
`
npm i && npm start
` will get it started.


## Problems 
- .csv with multiple headers
  - trim strings 
  - filter for empty lines in file
  - find invoice headers
  - find invoice headers info
- Determine actual total
  - find index of prices
  - find index of quantity
  - calculate total from prices and quantity
- Compare calculated total to incoming total
  - find index of total in csv

## Need to do
- check to see if info in columns is of right type
- create an object that contains all checked data in an appropriate format that can be sent to the backend 
