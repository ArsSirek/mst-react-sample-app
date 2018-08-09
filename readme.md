
#Description

Test project to try a mobx, mst, airbnb style guide, webpack technology stack

#Get-started

```
npm i
npm run start
mv .env.example .env
```

#todo
 - improve style (add some css for the search bar.. and a lot more)
 - make City Cards expandable (aka read more)
 - add normal loaders per block
 - routing component is rather raw, but attemts to demonstrate the [idea from the mobx author's Michel Weststrate blog post](https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37)
 - didn't test initial loading with path in url (haven't setup a server for that)
 - Convert weather object in store from frozen to Mobx state tree model - to show loader on each refresh (style that loader)
 