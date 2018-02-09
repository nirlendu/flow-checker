# Web App 

Flow Checker.

## To use

If running for the first time, run
```sh
mkdir -p ../assets/static/js
npm install
```

Then, to run on local

```sh
npm run local
```

And visit <http://localhost:3000/>

## Change the data

The input stream is coming from `app/schema/index.json`. Please modify the data feild for any desired input value.

## Change the flow

The flow is hard coded (I could've taken it from another API call, but didn't for simplicity). It can be found in `app/pages/index/Index.jsx`. Please modify for any desired flow.