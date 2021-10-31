# Timestamp Microservice

[femto-timestamp](#) is a simple full stack app that parses unix dates and YYYY-MM-DD formatted dated, and returns utc dates . This project idea was gotten from [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).

### Resources

There is only one resource

- Get date <#api/:dateStr>

#### Get date

A get request is made to <#api/:dateStr> where :dateStr is the date in YYYY-MM-DD or utc format

##### Sample return

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

// if the date is invalid, the following json object is returned

{
"error": "dateStr.toString()" }
}
```

### Feedback!!

I'd love your feedback on the API. You can reach me via [email](mailto:chinaemerema@gmail.com) or give me a shout out on [twitter](https://twitter.com/femto_ace?t=nk6ylNm1Zp2l0yiJkCKFeA&s=09)
